import React, { useState, useEffect } from "react";
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
  DropdownArrowContainer,
} from "./FormElements";
import ButtonElement from "../button/";
import InputComponent from "../input/";
import { Purposes } from "../consts/purposeData";
import { GiPayMoney } from "react-icons/gi";
import { MdTitle } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./success-modal";
import useForm from "./useForm";

const AddForm = () => {
  const purposes = Purposes;
  const {
    purposeOpen,
    isOpen,
    modalToggle,
    handlePurposeOpen,
    handleSubmit,
    submitSuccess,
  } = useForm();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [purpose, setPurpose] = useState();

  useEffect(() => {
    if (submitSuccess) {
      setTitle("");
      setPrice("");
      setPurpose();
    }
  }, [submitSuccess]);

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
    handlePurposeOpen();
  };

  return (
    <AddFormWrapper>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />{" "}
      {isOpen && <SuccessModal isOpen={isOpen} modalToggle={modalToggle} />}
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
          <PurposeDropdown onClick={handlePurposeOpen}>
            <Label>{purpose ? purpose.title : "Purpose"}</Label>
            <DropdownArrowContainer>
              {purposeOpen ? <DropDownIconUp /> : <DropDownIcon />}
            </DropdownArrowContainer>
          </PurposeDropdown>
          {purposeOpen && (
            <PurposesListContainer>
              {purposes.map((item) => {
                return (
                  <PurposeItem
                    key={item.id}
                    style={{ borderLeft: `5px solid ${item.color}` }}
                    onClick={() => handlePurpose(item)}
                  >
                    <Label>{item.title}</Label>
                    <PurposeImg style={{ color: `${item.color}` }}>
                      {item.icon}
                    </PurposeImg>
                  </PurposeItem>
                );
              })}
            </PurposesListContainer>
          )}
        </Dropdown>
      </DropdownParent>
      <ButtonElement
        icon={<BiSave />}
        text="submit"
        onClick={() => handleSubmit(title, price, purpose)}
      />
    </AddFormWrapper>
  );
};

export default AddForm;
