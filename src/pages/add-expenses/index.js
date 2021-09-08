import React from "react";
import { AddPageWrapper } from "./AddComponents";
import ExpensesNav from "../../components/add-expenses-nav";
import AddForm from "../../components/add-form";

const AddExpense = () => {
  return (
    <AddPageWrapper>
      <ExpensesNav />
      <AddForm />
    </AddPageWrapper>
  );
};

export default AddExpense;
