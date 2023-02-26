import ExpenseListItem from "./ExpenseListItem";
import type { Expense } from "./ExpenseListItem";

interface ExpensesListProps {
  expenses: Expense[];
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
