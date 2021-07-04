import { LogControllerDecorator } from '@/main/decorators'
import { LogMongoRepository } from '@/infra/db'
import { Controller } from '@/presenters/protocols'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
