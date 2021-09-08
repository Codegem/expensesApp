import { addExpense } from "../actions/expensesActions";

const initialState = {
  expenseList: [],
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case addExpense: {
      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };
    }
    default:
      return state;
  }
};
