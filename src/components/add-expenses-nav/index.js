import React from "react";
import { ButtonNav } from "./NavElements";
import { ImCancelCircle as Cancel } from "react-icons/im";
import { IoReturnUpBackOutline as Back } from "react-icons/io5";
import ButtonElement from "../button";

const ExpensesNav = () => {
  return (
    <div>
      <ButtonNav>
        <ButtonElement text="Back" icon={<Back />} link={true} path="/" />
        <ButtonElement text="cancel" icon={<Cancel />} />
      </ButtonNav>
    </div>
  );
};

export default ExpensesNav;
