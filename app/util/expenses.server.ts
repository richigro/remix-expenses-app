// the line below imports the connection to our database
import { prisma } from "./database.server";

export const addExpense = async (expenseData) => {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    console.log("error in addExpense function: ", error);
  }
};
