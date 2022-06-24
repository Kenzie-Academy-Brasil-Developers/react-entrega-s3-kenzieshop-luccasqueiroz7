import { toast } from "react-toastify";
import { addCart, removeCart, cleanCart } from "./actions";

export const removeCartThunk = (product) => (dispatch, getStore) => {
  const { cart } = getStore();

  const filtredProducts = cart.filter((prod) => prod !== product);
  localStorage.setItem(
    "@kenzieShop/productsCart",
    JSON.stringify(filtredProducts)
  );

  dispatch(removeCart(filtredProducts));
};

export const addCartThunk = (product) => (dispatch, getStore) => {
  const { cart } = getStore();

  const validationProduct = cart?.find((prod) => prod.name === product.name);

  const teste = [...cart, product];

  if (validationProduct === undefined) {
    localStorage.setItem("@kenzieShop/productsCart", JSON.stringify(teste));
    dispatch(addCart(product));
    toast.success("Produto adicionado com sucesso");
  } else {
    toast.error("Produto já está adicionado ao carrinho");
  }
};

export const cleanCartThunk = (product) => (dispatch, getStore) => {
  const { cart } = getStore();
  const namesCart = cart.map((elem) => elem.name).join(", 1 ");
  if (cart.length > 0) {
    toast.success(`Pedido finalizado com: 1 ${namesCart}.`);
  }
  localStorage.clear();
  dispatch(cleanCart(product));
};
