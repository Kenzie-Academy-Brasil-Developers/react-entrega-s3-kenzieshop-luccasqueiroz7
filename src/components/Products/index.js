import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../store/modules/cart/thunks";
import "./styles.css";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  return (
    <div className="products">
      <ul>
        {products?.map((product) => (
          <li className="product" key={product.name}>
            <img
              className="productImg"
              src={product.image}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button onClick={() => dispatch(addCartThunk(product))}>
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
