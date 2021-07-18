export interface AddPassword {
  add: (params: AddPassword.Params) => Promise<AddPassword.Result>
}

export namespace AddPassword {
  export type Params = {
    name: string
    email: string
    password: string
  }
  export type Result = boolean
}
