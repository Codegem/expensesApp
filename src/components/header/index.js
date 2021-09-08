import React, { useState } from "react";
import Input from "../input/index";
import { Nav, Header, Logo, LogoWrapper, LogoText } from "./HeaderComponents";
import { GrAdd as Icon } from "react-icons/gr";
import ButtonElement from "../button";
import { BiSearchAlt2 } from "react-icons/bi";

const HeaderComponent = () => {
  const [query, setQuery] = useState("");

  const click = () => {
    console.log("clickinu");
  };

  return (
    <Nav>
      <Header>
        <LogoWrapper href="#">
          <Logo />
          <LogoText>ExpensesApp</LogoText>
        </LogoWrapper>
        <ButtonElement
          onClick={click}
          text="Add"
          icon={<Icon />}
          link={true}
          path="/add-expenses"
        />
        <Input
          type="text"
          name="search"
          placeholder="Search for..."
          icon={<BiSearchAlt2 />}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Header>
    </Nav>
  );
};

export default HeaderComponent;
