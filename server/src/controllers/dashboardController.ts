import { PrismaClient, type ExpenseByCategory } from "@prisma/client";  // Importing the Prisma-generated type
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
      orderBy: {
        date: "desc",
      },
    });

    // Explicitly defining the type for 'item' as 'ExpenseByCategory'
    const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
      (item: ExpenseByCategory) => ({
        ...item,
        amount: item.amount.toString(),  // Ensure amount is converted to string
      })
    );

    res.json(expenseByCategorySummary);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving expenses by category" });
  }
};
