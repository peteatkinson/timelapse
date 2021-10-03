import { HttpResponse, Controller } from '@/presentation/protocols'

import { PrismaClient } from '@prisma/client';

export class EchoController implements Controller {
  async handle (text: string): Promise<HttpResponse> {

    const { user } = new PrismaClient();
    const users = await user.findMany({
      select: {
        username: true
      }
    })

    return {
      statusCode: 200,
      body: users
    }
  }
}