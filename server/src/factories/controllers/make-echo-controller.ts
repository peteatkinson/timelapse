import { Controller } from '@/presentation/protocols'
import { EchoController } from '@/presentation/controllers'

export const makeEchoController = (): Controller => {
  return new EchoController();
}