import React from "react";
import { ButtonWrapper, ButtonText, LinkButton } from "./ButtonComponent";

const ButtonElement = ({ text, onClick, icon, link, path }) => {
  return (
    <>
      {link ? (
        <LinkButton to={path}>
          {icon}
          <ButtonText>{text}</ButtonText>
        </LinkButton>
      ) : (
        <ButtonWrapper onClick={onClick}>
          {icon}
          <ButtonText>{text}</ButtonText>
        </ButtonWrapper>
      )}
    </>
  );
};

export default ButtonElement;
