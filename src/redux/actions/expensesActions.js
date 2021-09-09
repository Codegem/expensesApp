import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  QUERY_EXPENSE,
} from "../action-types/expenses";

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSE,
    data: data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    data: data,
  };
};

export const queryExpense = (query) => {
  return {
    type: QUERY_EXPENSE,
    query,
  };
};
