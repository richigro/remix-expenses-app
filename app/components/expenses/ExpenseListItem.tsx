import { Link } from "@remix-run/react";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
  dateAdded: string;
}

function ExpenseListItem({ title, amount, id }: Omit<Expense, "dateAdded">) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
