import { CreateOrganisationCommand } from '@/commands/create-organisation'
import { badRequest, noContent, ok } from '@/presentation/http-helper';
import { HttpResponse, Controller } from '@/presentation/protocols'

export class CreateOrganisationController implements Controller<Types.Request> {
  constructor(private readonly command: CreateOrganisationCommand) { }
  
  async handle (request: Types.Request) : Promise<HttpResponse> {
    const organisationId = await this.command.execute(request);

    if(!organisationId) {
      return badRequest();
    }

    return ok(organisationId);
  }
}


namespace Types {
  export type Request = {
    name: string
  }
}