import { Router } from 'express'
import { adaptRoute } from '@/adapters/express-routes'
import { makeEchoController } from '@/factories/controllers'

export default (router: Router): void => {
  router.get('/echo/:text', adaptRoute(makeEchoController()))
}