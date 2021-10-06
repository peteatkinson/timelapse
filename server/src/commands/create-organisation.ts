import { OrganisationRepository } from "@/domain/repositories/organisation";
import { Organisation } from "@/presentation/models";
import { CommandHandler } from "./core";

export interface CreateOrganisationCommand extends CommandHandler<Types.Params, string> {}


export class CreateOrganisationCommandHandler implements CreateOrganisationCommand {
  constructor(private readonly organisationRepository: OrganisationRepository) { }

  async execute(query?: Types.Params): Promise<string> {
    const {
      name
    } = query;
    
    const data = new Organisation("", name);
    const response = await this.organisationRepository.createOrganisation(data);
    
    return "";
  }
}

export namespace Types {
  export type Params = {
    name: string
  }
}