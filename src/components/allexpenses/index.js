import React from "react";
import { CardWrapper } from "./expensecard/cardElements";
import { AllExpensesContainer } from "./expensesElements";

const AllExpenses = () => {
  const expensesList = [
    {
      title: "Bought some stuff",
      price: "20euro",
      time: "1day ago",
      logo: "...",
    },
    {
      title: "Bought some stuff",
      price: "20euro",
      time: "1day ago",
      logo: "...",
    },
  ];

  return (
    <AllExpensesContainer>
      {expensesList.length
        ? expensesList.map((expense, key) => {
            return <CardWrapper key={key}>{expense.title}</CardWrapper>;
          })
        : null}
    </AllExpensesContainer>
  );
};

export default AllExpenses;
