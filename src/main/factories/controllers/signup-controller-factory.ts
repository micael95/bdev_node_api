import { makeDbAuthentication, makeSignUpValidation, makeLogControllerDecorator, makeDbAddAccount } from '@/main/factories'
import { SignUpController } from '@/presenters/controllers'
import { Controller } from '@/presenters/protocols'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
