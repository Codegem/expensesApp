import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export const AddFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    position: absolute;
    bottom: 15%;
  }
`;
export const InputWrapper = styled.div`
  width: 18vw;
`;
export const DropdownParent = styled.div``;
export const Dropdown = styled.div``;
export const PurposeDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5em;
  width: 18vw;
  height: 3rem;
  border-bottom: 1px solid black;
  margin: 0.5rem;
`;

export const DropdownArrowContainer = styled.div`
  padding-top: 1rem;
  font-size: 1.8rem;
`;

export const DropDownIcon = styled(IoMdArrowDropdown)``;
export const DropDownIconUp = styled(IoMdArrowDropup)``;

export const PurposesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PurposeItem = styled.div`
  width: 17vw;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  position: relative;
  margin-bottom: 0.1vw;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid black;
  }
`;

export const PurposeImg = styled.div`
  font-size: 1.3rem;
`;

export const Label = styled.label`
  font-size: 0.9em;
  opacity: 0.6;
`;

export const ModalText = styled.p`
  text-align: center;
`;
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
`;
