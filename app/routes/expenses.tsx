import { Outlet } from "@remix-run/react";

const ExpensesLayout = () => {
  return (
    <main>
      This is the expenses layout
      <Outlet />
    </main>
  );
};

export default ExpensesLayout;
