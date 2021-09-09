import React from "react";
import { ButtonWrapper, ButtonText, LinkButton } from "./ButtonComponent";

const ButtonElement = ({ text, onClick, icon, link, path, buttonClass }) => {
  return (
    <>
      {link ? (
        <LinkButton to={path} className={buttonClass}>
          {icon}
          {text && <ButtonText>{text}</ButtonText>}
        </LinkButton>
      ) : (
        <ButtonWrapper onClick={onClick} className={buttonClass}>
          {icon}
          {text && <ButtonText>{text}</ButtonText>}
        </ButtonWrapper>
      )}
    </>
  );
};

export default ButtonElement;
