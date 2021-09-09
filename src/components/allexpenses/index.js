import React, { useState } from "react";
import { AllExpensesContainer } from "./expensesElements";
import { useSelector } from "react-redux";
import ExpenseCard from "./expensecard";
import { toast, ToastContainer } from "react-toastify";
import EmptyExpenses from "../emptyExpenses";
import Wrapper from "../wrapper/";
import PaginationComponent from "../pagination/paginationComponent";
import usePagination from "../pagination/pagintion";

const AllExpenses = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);

  let filteredList = [];
  if (query === undefined) {
    filteredList = list;
  } else {
    filteredList = list.filter((item) => item.title.includes(query));
  }
  const notifySuccess = () => toast.success("Expense Deleted.");
  const obj = [...filteredList];
  const sortArray = obj.sort((a, b) => (a.id < b.id ? 1 : -1));
  const [page, setPage] = useState(1);
  const amountPerPage = 5;
  const count = Math.ceil(list.length / amountPerPage);
  const _DATA = usePagination(sortArray, amountPerPage);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Wrapper>
      <AllExpensesContainer>
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
        {filteredList.length ? (
          _DATA.currentData().map((expense, key) => {
            return (
              <ExpenseCard
                key={key}
                expense={expense}
                notifySuccess={notifySuccess}
              />
            );
          })
        ) : (
          <EmptyExpenses />
        )}
      </AllExpensesContainer>
      {list.length > amountPerPage && (
        <PaginationComponent
          page={page}
          count={count}
          handleChange={handleChange}
        />
      )}
    </Wrapper>
  );
};

export default AllExpenses;
