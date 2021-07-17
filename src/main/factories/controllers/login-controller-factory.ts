import { makeDbAuthentication, makeLoginValidation, makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presenters/protocols'
import { LoginController } from '@/presenters/controllers'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}
