import { REMOVE_CART, ADD_CART, CLEAN_CART } from "./actionsTypes";

const initialState =
  JSON.parse(localStorage.getItem("@kenzieShop/productsCart")) || [];

const cartReducer = (state = initialState, action) => {
  const { product } = action;

  switch (action.type) {
    case ADD_CART:
      return [...state, product];

    case REMOVE_CART:
      return product;

    case CLEAN_CART:
      return product;

    default:
      return state;
  }
};

export default cartReducer;
