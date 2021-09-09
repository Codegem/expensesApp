import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expensesActions";

const useForm = () => {
  const [purposeOpen, setPurposeOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const dispatch = useDispatch();

  const handlePurposeOpen = () => {
    setPurposeOpen(!purposeOpen);
  };

  const modalToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (title, price, purpose) => {
    if (title === "" || price === "" || !purpose) {
      const notify = () => toast("Please Enter Valid Data!");
      notify();
    } else {
      const data = {
        title,
        price,
        purpose: [purpose],
        createdAt: new Date(),
      };
      dispatch(addExpense(data));
      modalToggle();
      setSubmitSuccess(true);
      setTitle("");
      setPrice("");
      setPurpose();
    }
  };

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [purpose, setPurpose] = useState("");

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

  return {
    purposeOpen,
    isOpen,
    modalToggle,
    handlePurposeOpen,
    handleSubmit,
    submitSuccess,
    handleTitle,
    handlePrice,
    handlePurpose,
    title,
    price,
    purpose,
  };
};

export default useForm;
