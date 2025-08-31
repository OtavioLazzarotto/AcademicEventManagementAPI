import { container } from 'tsyringe'
import { dataSource } from '@/common/infrastructure/typeorm'
import { EventTypeormRepository } from '../typeorm/repositories/events-typeorm.repository'
import { CreateEventUseCase } from '@/events/application/usecases/create-event.usecase'
import { UpdateEventUseCase } from '@/events/application/usecases/update-event.usecase'
import { DeleteEventUseCase } from '@/events/application/usecases/delete-event.usecase'
import { GetAllEventUseCase } from '@/events/application/usecases/getAll-event.usecase'
import { Events } from '../typeorm/entities/events.entity'

container.registerSingleton('EventsRepository', EventTypeormRepository)

container.registerInstance(
  'EventsDefaultTypeormRepository',
  dataSource.getRepository(Events),
)

container.registerSingleton('CreateEventsUseCase', CreateEventUseCase.UseCase)

container.registerSingleton('UpdateEventsUseCase', UpdateEventUseCase.UseCase)

container.registerSingleton('DeleteEventsUseCase', DeleteEventUseCase.UseCase)

container.registerSingleton('GetAllEventsUseCase', GetAllEventUseCase.UseCase)
