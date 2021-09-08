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
    }
  };

  return {
    purposeOpen,
    isOpen,
    modalToggle,
    handlePurposeOpen,
    handleSubmit,
    submitSuccess,
  };
};

export default useForm;
