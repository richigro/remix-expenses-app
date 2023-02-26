import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

const ExpensesAppLayout = () => {
  return <Outlet />;
};

export default ExpensesAppLayout;
