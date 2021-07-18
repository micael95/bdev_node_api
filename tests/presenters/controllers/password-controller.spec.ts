import { AddPasswordController } from '@/presenters/controllers'
import { noContent, serverError } from '@/presenters/helpers'
import { ValidationSpy, AddPasswordSpy } from '@/tests/presenters/mocks'
import faker from 'faker'
import { throwError } from '@/tests/domain/mocks'

const mockRequest = (): AddPasswordController.Request => ({
  description: faker.random.word(),
  category: {
    description: faker.random.word()
  },
  tags: [
    faker.random.word()
  ],
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent()
})

type SutTypes = {
  sut: AddPasswordController
  validationSpy: ValidationSpy
  addPasswordSpy: AddPasswordSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const addPasswordSpy = new AddPasswordSpy()
  const sut = new AddPasswordController(addPasswordSpy, validationSpy)
  return {
    sut,
    validationSpy,
    addPasswordSpy
  }
}

describe('PasswordController', () => {
  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })

  test('Should return 500 if AddPassword throws', async () => {
    const { sut, addPasswordSpy } = makeSut()
    jest.spyOn(addPasswordSpy, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
