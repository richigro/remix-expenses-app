import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { useNavigate } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { addExpense } from "~/util/expenses.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);
  console.log(expenseData, formData);

  await addExpense(expenseData);
  return redirect("/expenses");
};

const AddExpensesPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("..");
  };
  return (
    <>
      <Modal onClose={handleClose}>
        <ExpenseForm />
      </Modal>
    </>
  );
};

export default AddExpensesPage;
