import { DepartmentRepository } from '@/domain/repositories/department';
import { HttpResponse, Controller } from '@/presentation/protocols'

import { PrismaClient } from '@prisma/client';

export class EchoController implements Controller<EchoController.Request> {
  async handle (request: EchoController.Request): Promise<HttpResponse> {
    const { organisationId } = request;

    const departmentRepository = new DepartmentRepository();
    const departments = await departmentRepository.loadDepartments(organisationId);

    return {
      statusCode: 200,
      body: departments
    }
  }
}


export namespace EchoController {
  export type Request = {
    organisationId: string
  }
}