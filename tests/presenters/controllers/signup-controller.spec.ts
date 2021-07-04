import { Validation } from './../protocols/validation'
import { AddAccount } from './../../../src/domain/usecases/add-account'
import { SignUpController } from '@/presenters/controllers/signup-controller'
import faker from 'faker'
import { MissingParamError } from '@/presenters/errors'
import { badRequest } from '@/presenters/helpers'
import { Authentication } from '@/domain/usecases'

const mockRequest = (): SignUpController.Request => {
  const password = faker.internet.password()
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password,
    passwordConfirmation: password
  }
}

class AuthenticationSpy implements Authentication {
  auth: (authenticationParams: Authentication.Params) => Promise<Authentication.Result>
}

class AddAccountSpy implements AddAccount {
  add: (account: AddAccount.Params) => Promise<boolean>
}

class ValidationSpy implements Validation {
  error: Error = null
  input: any

  validate (input: any): Error {
    this.input = input
    return this.error
  }
}

type SutTypes = {
  sut: SignUpController
  addAccountSpy: AddAccountSpy
  validationSpy: ValidationSpy
  authenticationSpy: AuthenticationSpy
}

const makeSut = (): SutTypes => {
  const authenticationSpy = new AuthenticationSpy()
  const addAccountSpy = new AddAccountSpy()
  const validationSpy = new ValidationSpy()
  const sut = new SignUpController(addAccountSpy, validationSpy, authenticationSpy)
  return {
    sut,
    addAccountSpy,
    validationSpy,
    authenticationSpy
  }
}

describe('SignUp Controller', () => {
  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new MissingParamError(faker.random.word())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })
})
