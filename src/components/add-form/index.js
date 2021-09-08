import React, { useState } from "react";
import {
  AddFormWrapper,
  InputWrapper,
  DropdownParent,
  Dropdown,
  PurposeDropdown,
  PurposesListContainer,
  Label,
  PurposeItem,
  PurposeImg,
  DropDownIcon,
  DropDownIconUp,
} from "./FormElements";
import ButtonElement from "../button/";
import InputComponent from "../input/";
import { Purposes } from "../consts/purposeData";
import { GiPayMoney } from "react-icons/gi";
import { MdTitle } from "react-icons/md";
import { BiSave } from "react-icons/bi";

const AddForm = () => {
  const purposes = Purposes;
  const [purposeOpen, setPurposeOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [purpose, setPurpose] = useState();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlePrice = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setPrice("");
      return;
    }
    setPrice(value);
  };

  const handlePurpose = (purpose) => {
    setPurpose(purpose);
    setPurposeOpen(false);
  };

  const handleSubmit = () => {
    console.log("submited");
  };

  return (
    <AddFormWrapper>
      <InputWrapper>
        <InputComponent
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => handleTitle(e)}
          icon={<MdTitle />}
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => handlePrice(e)}
          icon={<GiPayMoney />}
        />
      </InputWrapper>
      <DropdownParent>
        <Dropdown>
          <PurposeDropdown onClick={() => setPurposeOpen(!purposeOpen)}>
            <Label>{purpose ? purpose.title : "Purpose"}</Label>
            {purposeOpen ? <DropDownIconUp /> : <DropDownIcon />}
          </PurposeDropdown>
          {purposeOpen && (
            <PurposesListContainer>
              {purposes.map((item) => {
                return (
                  <PurposeItem
                    key={item.id}
                    style={{ borderBottom: `5px solid ${item.color}` }}
                    onClick={() => handlePurpose(item)}
                  >
                    <Label>{item.title}</Label>
                    <PurposeImg>{item.icon}</PurposeImg>
                  </PurposeItem>
                );
              })}
            </PurposesListContainer>
          )}
        </Dropdown>
      </DropdownParent>
      <ButtonElement icon={<BiSave />} text="submit" onClick={handleSubmit} />
    </AddFormWrapper>
  );
};

export default AddForm;
