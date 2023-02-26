import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";

export const DUMMY_EXPENSES = [
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
