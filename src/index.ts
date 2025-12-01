import { Elysia } from 'elysia'
import cookie from '@elysiajs/cookie'
import { cors } from '@elysiajs/cors'

import { authRoutes } from './infra/routes/auth'
import { squadRoutes } from './infra/routes/squad'
import { transcriptionRoutes } from './infra/routes/transcription'
import { categoryRoutes } from './infra/routes/category'
import { webhookRoutes } from './infra/routes/webhook'
import { SwaggerConfig } from './infra/config/swagger'

const app = new Elysia()
  .use(cors()).listen(3000)
  .use(cookie())
  .get('/health', () => ({ ok: true }))
  .use(SwaggerConfig)
  .use(authRoutes)
  .use(squadRoutes)
  .use(transcriptionRoutes)
  .use(categoryRoutes)
  .use(webhookRoutes)
  .listen(3333)

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
