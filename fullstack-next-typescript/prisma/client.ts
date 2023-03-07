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

// Prrevent multiple instances of Prisma Client in developemnt
declare const global: CustomNodeJsGlobal


const prisma = global.prisma || new PrismaClient()
export default prisma

// if (process.env.NODE_ENV === "development")

