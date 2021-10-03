import 'module-alias/register'

import env from '@/config/env'


async function start() {
  const app = (await import('./config/app')).default
  app.listen(env.port, () => console.log(`🚀 App up-and-running at: http://localhost:${env.port}`))
}

start();