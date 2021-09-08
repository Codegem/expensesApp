import React from "react";
import { InputWrapper, Input, InputImg } from "./InputComponent";

const InputComponent = ({ type, name, placeholder, icon, onChange, value }) => {
  return (
    <InputWrapper>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <InputImg>{icon}</InputImg>
    </InputWrapper>
  );
};

export default InputComponent;
