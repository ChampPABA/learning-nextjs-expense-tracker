import prisma from "@/app/libs/prisma";

export async function fetchTransactionById(id) {
  return await prisma.transaction.findFirst({ where: { id } });
}
