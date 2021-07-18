import { Controller, HttpResponse, Validation } from '@/presenters/protocols'
import { AddPassword } from '@/domain/usecases/add-password'
import { noContent } from '@/presenters/helpers'

export class AddPasswordController implements Controller {
  constructor (
    private readonly addPassword: AddPassword,
    private readonly validation: Validation
  ) {}

  async handle (request: any): Promise<HttpResponse> {
    return noContent()
  }
}

export namespace AddPasswordController {
  export type Request = {
    description: string
    category: category
    tags: tags[]
    createdAt: Date
    updatedAt: Date
  }

  type category = {
    description
  }
  type tags = string
}
