import { Department, Organisation } from '.prisma/client';

export class OrganisationEntity {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: string;
}

export namespace OrganisationEntity {
  export function map(data: Organisation): OrganisationEntity {
    if(data == null) return null;
    return {
      id: data.id,
      name: data.name,
      createdAt: data.created_at,
    };
  }
}


export class DepartmentEntity {
  id?: string;
}

export namespace DepartmentEntity {
  export function map(data: Department): DepartmentEntity {
    if(data == null) return null;
    return {
      id: data.id
    }
  }
}


