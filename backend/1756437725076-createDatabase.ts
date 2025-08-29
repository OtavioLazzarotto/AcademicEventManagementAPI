import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1756437725076 implements MigrationInterface {
    name = 'CreateDatabase1756437725076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "events" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "location" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "addressStreet"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "addressNumberhouse"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "addressCity"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "addressState"`);
        await queryRunner.query(`CREATE TYPE "public"."users_roles_enum" AS ENUM('ADMINISTRADOR', 'USER')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "roles" "public"."users_roles_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "roles"`);
        await queryRunner.query(`DROP TYPE "public"."users_roles_enum"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "addressState" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "addressCity" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "addressNumberhouse" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "addressStreet" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "events"`);
    }

}
