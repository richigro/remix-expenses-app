import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import { DUMMY_EXPENSES } from "~/routes/__app/expenses";

const ExpensesAnalysisPage = () => {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
};

export default ExpensesAnalysisPage;
