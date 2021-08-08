import { AddPassword } from '@/domain/usecases/add-password'

export class AddPasswordSpy implements AddPassword {
  params: AddPassword.Params
  result = true

  async add (params: AddPassword.Params): Promise<AddPassword.Result> {
    this.params = params
    return this.result
  }
}
