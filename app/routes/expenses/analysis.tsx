import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

const DUMMY_EXPENSES = {
  id: "hi",
  title: "hello",
  amount: 123,
};

const ExpensesAnalysisPage = () => {
  return (
    <main>
      <Chart />
      <ExpenseStatistics />
    </main>
  );
};

export default ExpensesAnalysisPage;
