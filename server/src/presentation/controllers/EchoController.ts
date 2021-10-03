import { HttpResponse, Controller } from '@/presentation/protocols'

export class EchoController implements Controller {
  async handle (text: string): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: text
    }
  }
}