import { PasswordModel } from '@/domain/model/password'

export interface AddPassword {
  add: (params: AddPassword.Params) => Promise<AddPassword.Result>
}

export namespace AddPassword {
  export type Params = Omit<PasswordModel, 'id'>
  export type Result = boolean
}
