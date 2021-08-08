import { Controller, HttpResponse, Validation } from '@/presenters/protocols'
import { AddPassword } from '@/domain/usecases/add-password'
import { badRequest, noContent, serverError } from '@/presenters/helpers'

export class AddPasswordController implements Controller {
  constructor (
    private readonly addPassword: AddPassword,
    private readonly validation: Validation
  ) {
  }

  async handle (request: any): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      await this.addPassword.add(request)
      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

export namespace AddPasswordController {
  export type Request = {
    description: string
    category: Category
    tags: Tag[]
  }

  type Category = {
    description
  }
  type Tag = string
}
