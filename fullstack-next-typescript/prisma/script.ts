import { PrismaClient } from '@prisma/client'

declare global {
  namespace NodeJS {
    interface Global {}
  }
}

// add primsa to the NodeJS glboal type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient
}
