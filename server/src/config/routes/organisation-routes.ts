import { Router } from 'express'
import { adaptRoute } from '@/adapters/express-routes'
import { makeCreateOrganisationController, makeGetOrganisationController } from '@/factories/controllers'

export default (router: Router): void => {
  router.get('/organisation/:id', adaptRoute(makeGetOrganisationController()));
  router.post('/organisation', adaptRoute(makeCreateOrganisationController()));
}