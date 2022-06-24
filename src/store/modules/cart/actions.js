import { REMOVE_CART, ADD_CART, CLEAN_CART } from "./actionsTypes";

export const addCart = (product) => ({
  type: ADD_CART,
  product,
});

export const removeCart = (product) => ({
  type: REMOVE_CART,
  product,
});

export const cleanCart = (product) => ({
  type: CLEAN_CART,
  product,
});
