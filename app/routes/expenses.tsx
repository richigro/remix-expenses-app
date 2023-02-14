import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/expenses.css";
import ExpensesList from "~/components/expenses/ExpensesList";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
}

export const DUMMY_EXPENSES: Expense[] = [
  {
    id: "e1",
    title: "first expense",
    amount: 123,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "second expense",
    amount: 15,
    date: new Date().toISOString(),
  },
];

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const ExpensesLayout = () => {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
};

export default ExpensesLayout;
