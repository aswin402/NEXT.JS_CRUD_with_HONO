
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient, type PrismaClient as p } from '../generated/prisma/client'


const globalForPrisma = global as unknown as {
    prisma: p
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
     log: [
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'error' },
    { emit: 'event', level: 'info' },
    { emit: 'event', level: 'warn' },
  ],
})


if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma