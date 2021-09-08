import React from "react";
import { CardWrapper } from "./cardElements";

const ExpenseCard = ({ expense }) => {
  return <CardWrapper>{expense.title}</CardWrapper>;
};

export default ExpenseCard;
