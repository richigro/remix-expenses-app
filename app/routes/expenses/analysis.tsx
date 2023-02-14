import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import type { Expense } from "~/components/expenses/Chart";

const DUMMY_EXPENSES: Expense[] = [
  {
    id: "hi",
    title: "hello",
    amount: 123,
    date: new Date().toISOString(),
  },
];

const ExpensesAnalysisPage = () => {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
};

export default ExpensesAnalysisPage;
