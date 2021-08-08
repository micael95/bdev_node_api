import { AddPassword } from '@/domain/usecases'

export interface AddPasswordRepository {
  add: (data: AddPasswordRepository.Params) => Promise<AddPasswordRepository.Result>
}

export namespace AddPasswordRepository {
  export type Params = AddPassword.Params
  export type Result = boolean
}
