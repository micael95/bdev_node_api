import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use('/api/v1', router)
  // eslint-disable-next-line node/no-path-concat
  readdirSync(`${__dirname}/../routes/v1`).map(async file => {
    if (!file.endsWith('.map')) {
      (await import(`../routes/v1/${file}`)).default(router)
    }
  })
}
