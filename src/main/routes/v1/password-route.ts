import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makePasswordController } from '@/main/factories'

export default (router: Router): void => {
  router.post('/password', adaptRoute(makePasswordController()))
}
