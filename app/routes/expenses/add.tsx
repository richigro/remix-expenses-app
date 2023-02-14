import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

const AddExpensesPage = () => {
  return (
    <>
      <h1>add route</h1>
      <Modal onClose={() => {}}>
        <ExpenseForm />
      </Modal>
    </>
  );
};

export default AddExpensesPage;
