import { Outlet, Link } from "@remix-run/react";
import { FaPlus, FaDownload } from "react-icons/fa";

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
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add expense</span>
          </Link>
          {/* this should be an anchor tag because the raw route doesn't have any UI */}
          <a href="/expenses/raw">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
};

export default ExpensesLayout;
