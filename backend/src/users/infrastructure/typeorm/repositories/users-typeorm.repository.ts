import { UserModel } from "@/users/domain/models/users.model";
import { inject, injectable } from "tsyringe";
import { Repository } from "typeorm";
import { NotFoundError } from "@/common/domain/errors/not-found-error";
import { ConflictError } from "@/common/domain/errors/conflict-error";
import {
  CreateUserProps,
  UsersRepository,
} from "@/users/repositories/user.repository";
import { Users } from "../entities/users.entity";

@injectable()
export class UsersTypeormRepository implements UsersRepository {
  constructor(
    @inject("UsersDefaultTypeormRepository")
    private usersRepository: Repository<Users>
  ) {}

  async findByEmail(email: string): Promise<UserModel> {
    const user = await this.usersRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundError(`User not found using email ${email}`);
    }

    return user;
  }

  async conflictingEmail(email: string): Promise<void> {
    const user = await this.usersRepository.findOneBy({ email });

    if (user) {
      throw new ConflictError("Email is already being used");
    }
  }

  create(props: CreateUserProps): UserModel {
    return this.usersRepository.create(props);
  }

  async insert(model: UserModel): Promise<UserModel> {
    return this.usersRepository.save(model);
  }

  async findById(id: string): Promise<UserModel> {
    return this._get(id);
  }

  async update(model: UserModel): Promise<UserModel> {
    await this._get(model.id);
    await this.usersRepository.update({ id: model.id }, model);
    return model;
  }

  async delete(id: string): Promise<void> {
    await this._get(id);

    await this.usersRepository.delete({ id });
  }

  async getAll(): Promise<UserModel[]> {
    return await this.usersRepository.find({
      order: { created_at: "ASC" },
    });
  }

  protected async _get(id: string): Promise<UserModel> {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundError(`User not found using ID: ${id}`);
    }

    return user;
  }
}
