export const addCustomer = (customer) => {
  return {
    type: "ADD_CUSTOMER",
    data: customer,
  };
};

export const deleteCustomer = (id) => {
  return {
    type: "DELETE_CUSTOMER",
    userId: id,
  };
};

export const editCustomer = (customer, index) => {
  return {
    type: "EDIT_CUSTOMER",
    index: index,
    data: customer,
  };
};
