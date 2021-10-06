import { HttpResponse, Controller } from '@/presentation/protocols'
import { GetOrganisationById } from '@/queries'
import{ ok, badRequest, noContent } from '@/presentation/http-helper';

export class GetOrganisationController implements Controller<Types.Request> {
  constructor(private readonly query: GetOrganisationById) { }

  async handle (request: Types.Request) : Promise<HttpResponse> {
    const id = request?.id;
    const response = await this.query.handle(id);

    if(!response) {
      return noContent();
    }

    return ok(response);
  }
}


namespace Types {
  export type Request = {
    id: string
  }
}