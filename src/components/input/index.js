import React, { useState } from "react";
import { InputWrapper, Input, InputImg } from "./InputComponent";

const InputComponent = ({ type, name, placeholder, icon }) => {
  const [query, setQuery] = useState("");
  return (
    <InputWrapper>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <InputImg>{icon}</InputImg>
    </InputWrapper>
  );
};

export default InputComponent;
