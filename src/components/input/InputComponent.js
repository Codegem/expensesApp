import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  width: 18vw;
  height: 3vw;
  background: none;
  border: none;
  border-bottom: 1px solid black;
  padding-top: 1.5vw;
  padding-left: 0.5rem;
  &:focus {
    outline: none;
    background: none;
  }
`;

export const InputImg = styled.div`
  position: absolute;
  font-size: 2.2vw;
  right: 0;
  top: 0.8vw;
  cursor: pointer;
`;
