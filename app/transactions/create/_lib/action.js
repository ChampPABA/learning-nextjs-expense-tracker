"use server";

import prisma from "@/app/libs/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTransaction(formData) {
  const transaction = {};
  transaction.categoryId = formData.get("categoryId");
  transaction.amount = +formData.get("amount") * 100;
  transaction.date = new Date(formData.get("date"));
  transaction.description = formData.get("description");

  if (!transaction.categoryId || !transaction.amount || !transaction.date) {
    throw new Error("data is required");
  }

  await prisma.transaction.create({ data: transaction });

  redirect("/transactions");
}

export async function editTransaction(id, formData) {
  const transaction = {};
  transaction.categoryId = formData.get("categoryId");
  transaction.amount = +formData.get("amount") * 100;
  transaction.date = new Date(formData.get("date"));
  transaction.description = formData.get("description");

  if (!transaction.categoryId || !transaction.amount || !transaction.date) {
    throw new Error("data is required");
  }

  await prisma.transaction.update({ data: transaction, where: { id } });

  redirect("/transactions");
}

export async function deleteTransaction(id) {
  await prisma.transaction.delete({ where: { id } });

  revalidatePath("/transactions");
}
