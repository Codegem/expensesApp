import React, { useState, useEffect } from "react";
import Input from "../input/index";
import { Nav, Header, Logo, Side } from "./HeaderComponents";
import { GrAdd as Icon } from "react-icons/gr";
import ButtonElement from "../button";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { queryExpense } from "../../redux/actions/expensesActions";
import Divider from "@material-ui/core/Divider";

const HeaderComponent = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryExpense(query));
  }, [query, dispatch]);

  return (
    <Nav>
      <Header>
        <Side>
          <ButtonElement
            icon={<Logo />}
            link={true}
            path="/"
            buttonClass="delete"
            size={3}
          />
          <ButtonElement
            text="Add"
            icon={<Icon />}
            link={true}
            path="/add-expenses"
          />
        </Side>
        <Input
          name="Search"
          type="text"
          value={query}
          icon={<BiSearchAlt2 />}
          onChange={(e) => setQuery(e.target.value)}
          width={20}
        />
      </Header>
      <Divider light />
    </Nav>
  );
};

export default HeaderComponent;
