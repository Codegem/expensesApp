import React from "react";
import Modal from "react-modal";
import { ModalText, ModalBody } from "./FormElements";

const SuccessModal = ({ isOpen, modalToggle }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={modalToggle}
      ariaHideApp={false}
    >
      <ModalText>Added!</ModalText>
      <ModalBody>
        <img
          src={require("../../images/success.svg").default}
          alt="success-img"
        />
      </ModalBody>
    </Modal>
  );
};

export default SuccessModal;
