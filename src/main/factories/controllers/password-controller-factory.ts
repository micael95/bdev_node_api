import { Controller } from '@/presenters/protocols'
import { AddPasswordController } from '@/presenters/controllers'
import {
  makeDbAddPassword,
  makeLogControllerDecorator
} from '@/main/factories'
import { makePasswordValidation } from '@/main/factories/controllers/password-validation-factory'

export const makePasswordController = (): Controller => {
  const controller = new AddPasswordController(makeDbAddPassword(), makePasswordValidation())
  return makeLogControllerDecorator(controller)
}
