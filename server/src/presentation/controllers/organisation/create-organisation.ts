import { HttpResponse, Controller } from '@/presentation/protocols'

export class CreateOrganisationController implements Controller<CreateOrganisationController.Request> {
  async handle (request: CreateOrganisationController.Request) : Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: null
    }
  }
}


namespace CreateOrganisationController {
  export type Request = {
    name: string
  }
}