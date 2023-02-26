import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

const ExpensesDetailPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("..");
  };
  return (
    <>
      <h1>The Id route</h1>
      <Modal onClose={handleClose}>
        <ExpenseForm />
      </Modal>
    </>
  );
};

export default ExpensesDetailPage;
