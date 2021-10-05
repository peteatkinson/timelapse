import { Department } from '.prisma/client';
import { PrismaClient } from "@prisma/client";
import { equal } from 'assert';

export class DepartmentRepository {
  async loadDepartment(id: string): Promise<Department> {
    const { department } = new PrismaClient();
    return await department.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });
  }

  async loadDepartments(organisationId: string): Promise<Department[]> {
    const { department } = new PrismaClient(); 
    return await department.findMany({
      where: {
        organisationId: {
          equals: organisationId,
        },
      },
    });
  }

  async createDepartment(data: Department): Promise<Department> {
    const { department } = new PrismaClient(); 
    return await department.create({ data: data });
  }
}
