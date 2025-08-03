import { PrismaClient } from "@prisma/client"; // match your custom path




export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}



//globalThis .prisma:this global varible ensures that the prisma  client instance is 
///reused across hot reloads during development .without his each toime your applicatio 
//reloads ,a new instances ofthe prisma client would ne created potentially leading 
//to connection issue
