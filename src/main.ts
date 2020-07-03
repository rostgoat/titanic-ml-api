import { NestExpressApplication } from '@nestjs/platform-express'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import 'reflect-metadata'
require('dotenv').config()

// local dev port
const port = 3000

/**
 * API entry point
 */
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)


  app.enableCors()
  await app.listen(port)

  if (process.env.NODE_ENV !== 'production')
    Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap')

}
bootstrap()