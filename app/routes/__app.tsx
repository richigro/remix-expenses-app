import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";
import type { LinksFunction } from "@remix-run/node";

import ExpensesHeader from "~/components/navigation/ExpensesHeader";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

const ExpensesAppLayout = () => {
  return (
    <>
      <ExpensesHeader />
      <Outlet />;
    </>
  );
};

export default ExpensesAppLayout;
