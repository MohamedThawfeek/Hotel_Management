const initialState = {
  customers: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return {
        customers: [...state.customers, action.data],
      };

    case "DELETE_CUSTOMER":
      const tempArr = state.customers.filter((_, index) => {
        return index !== action.userId;
      });
      return {
        customers: [...tempArr],
      };
    case "EDIT_CUSTOMER":
      return {
        customers: [(state.customers[action.index], { ...action.data })],
      };

    default:
      return state;
  }
};

export default appReducer;
