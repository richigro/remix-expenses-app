import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { useNavigate } from "@remix-run/react";

const AddExpensesPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    console.log("yoloooo");

    navigate("..");
  };
  return (
    <>
      <h1>add route</h1>
      <Modal onClose={handleClose}>
        <ExpenseForm />
      </Modal>
    </>
  );
};

export default AddExpensesPage;
