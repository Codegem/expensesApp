import React from "react";
import { AllExpensesContainer } from "./expensesElements";
import { useSelector } from "react-redux";
import ExpenseCard from "./expensecard";
import { toast, ToastContainer } from "react-toastify";
const AllExpenses = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);
  const notifySuccess = () => toast.success("Expense Deleted.");

  return (
    <AllExpensesContainer>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />{" "}
      {list.length !== 0
        ? list.map((expense, key) => {
            return (
              <ExpenseCard
                key={key}
                expense={expense}
                notifySuccess={notifySuccess}
              />
            );
          })
        : null}
    </AllExpensesContainer>
  );
};

export default AllExpenses;
