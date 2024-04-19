const initialState = {
  adminId: null,
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_AUTH":
      return {
        ...state,
        adminId: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        adminId: null,
      };

    default:
      return state;
  }
};

export default reducer;
