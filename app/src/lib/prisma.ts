
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.POSTGRES_URL,
      }
    }
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.POSTGRES_URL,
        }
      }
    });
  }
  prisma = global.prisma;
}

export default prisma;
