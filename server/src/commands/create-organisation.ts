import { OrganisationRepository } from "@/domain/repositories/organisation";
import { Organisation } from "@/presentation/models";
import { CommandHandler } from "./core";

export interface CreateOrganisationCommand extends CommandHandler<Types.Params, string> {}


export class CreateOrganisationCommandHandler implements CreateOrganisationCommand {
  constructor(private readonly organisationRepository: OrganisationRepository) { }

  async execute(query?: Types.Params): Promise<string> {
    return await this.organisationRepository.createOrganisation({ ...query });
  }
}

export namespace Types {
  export type Params = {
    name: string
  }
}