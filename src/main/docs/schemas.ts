import {
  accountSchema,
  loginParamsSchema,
  errorSchema,
  signUpParamsSchema, passwordParamsSchema, passwordSchema
} from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  passwordParams: passwordParamsSchema,
  password: passwordSchema,
  error: errorSchema
}
