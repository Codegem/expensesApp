import React from "react";
import { AddFormWrapper, PurposeImg, ButtonWrapper } from "./FormElements";
import ButtonElement from "../button/";
import Input from "../input/index";
import { IoReturnUpBackOutline as Back } from "react-icons/io5";
import { Purposes } from "../consts/purposeData";
import { GiPayMoney } from "react-icons/gi";
import { MdTitle } from "react-icons/md";
import { BiSave } from "react-icons/bi";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

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
    handleTitle,
    handlePrice,
    handlePurpose,
    title,
    price,
    purpose,
  } = useForm();

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
      padding: "0 10px",
    },
    label: {
      paddingLeft: "10px",
    },
    margin: {
      marginBottom: "0.5rem",
    },
    display: {
      top: "3rem",
    },
  }));

  const classes = useStyles();

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
      />
      {isOpen && <SuccessModal isOpen={isOpen} modalToggle={modalToggle} />}
      <Input
        name="Title"
        type="text"
        value={title}
        onChange={(e) => handleTitle(e)}
        icon={<MdTitle />}
        width={60}
      />
      <Input
        name="Price"
        type="number"
        value={price}
        onChange={(e) => handlePrice(e)}
        icon={<GiPayMoney />}
        width={60}
      />
      <FormControl className={classes.formControl}>
        <InputLabel
          id="demo-controlled-open-select-label"
          className={classes.label}
        >
          Purposes
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={purposeOpen}
          onClose={handlePurposeOpen}
          onOpen={handlePurposeOpen}
          value={purpose}
        >
          <MenuItem value={purpose} disabled>
            Select Purpose
          </MenuItem>
          {purposes.map((item) => {
            return (
              <MenuItem
                key={item.id}
                style={{ borderLeft: `5px solid ${item.color}` }}
                onClick={() => handlePurpose(item)}
                className={classes.margin}
                value={item}
              >
                <PurposeImg style={{ color: `${item.color}` }}>
                  {item.icon} {item.title}
                </PurposeImg>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <ButtonWrapper>
        <ButtonElement
          icon={<BiSave />}
          text="submit"
          onClick={() => handleSubmit(title, price, purpose)}
        />
        <ButtonElement text="Back" icon={<Back />} link={true} path="/" />
      </ButtonWrapper>
    </AddFormWrapper>
  );
};

export default AddForm;
