import React from "react";
import AddPage from "../../components/add";
import AllExpenses from "../../components/allexpenses";
import { Home } from "./HomeComponents";
const index = () => {
  return (
    <Home>
      {window.location.pathname === "/" ? <AllExpenses /> : <AddPage />}
    </Home>
  );
};

export default index;
