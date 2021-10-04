import React from "react";
import AddForm from "../../components/add-form/";
import AllExpenses from "../../components/allexpenses";
import { Home } from "./HomeComponents";

const index = () => {
  return (
    <Home>
      {window.location.pathname === "/expensesApp/" ? (
        <AllExpenses />
      ) : (
        <AddForm />
      )}
    </Home>
  );
};

export default index;
