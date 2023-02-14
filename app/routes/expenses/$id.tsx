import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

const ExpensesDetailPage = () => {
  return (
    <>
      <h1>The Id route</h1>
      <Modal onClose={() => {}}>
        <ExpenseForm />
      </Modal>
    </>
  );
};

export default ExpensesDetailPage;
