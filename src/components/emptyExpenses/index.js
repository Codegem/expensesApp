import React from "react";
import {
  EmptyExpensesWrapper,
  EmptyExpensesText,
  EmptyExpensesImg,
} from "./emptyExpensesElements";

const EmptyExpenses = () => {
  return (
    <EmptyExpensesWrapper>
      <EmptyExpensesText>Your Expenses List is Empty. </EmptyExpensesText>
      <EmptyExpensesImg
        src={require("../../images/empty.svg").default}
        alt="success-img"
      />
    </EmptyExpensesWrapper>
  );
};

export default EmptyExpenses;
