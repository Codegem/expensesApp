import React from "react";
import {
  CardWrapper,
  TaskTime,
  DeleteIcon,
  TaskLogo,
  TaskTitle,
  MoneySpent,
  FirstWrap,
  SecondWrap,
  TitleTimeWrap,
} from "./cardElements";
import ButtonElement from "../../button/index";
import { MdDeleteForever } from "react-icons/md";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../../redux/actions/expensesActions";

const ExpenseCard = ({ expense, notifySuccess }) => {
  const time = moment(expense.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(expense));
    notifySuccess();
  };

  return (
    <CardWrapper>
      <FirstWrap>
        <TaskLogo>
          {expense.purpose !== undefined && expense.purpose.icon}
        </TaskLogo>
        <TitleTimeWrap>
          <TaskTitle>{expense.title}</TaskTitle>
          <TaskTime>{time}</TaskTime>
        </TitleTimeWrap>
      </FirstWrap>
      <SecondWrap>
        <DeleteIcon>
          <ButtonElement
            text=""
            onClick={handleDelete}
            icon={<MdDeleteForever />}
          />
        </DeleteIcon>
        <MoneySpent>{expense.price} €</MoneySpent>
      </SecondWrap>
    </CardWrapper>
  );
};

export default ExpenseCard;
