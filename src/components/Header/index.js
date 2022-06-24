import cartImg from "../../assets/cart.png";
import loginImg from "../../assets/login.png";
import { useSelector } from "react-redux";
import "./styles.css";
import { useHistory } from "react-router-dom";

function Header() {
  const { cart } = useSelector((state) => state);
  const history = useHistory();
  return (
    <header>
      <h1>LQ Store</h1>
      <div className="detailsHeader">
        <div className="buttonCart">
          <img src={cartImg} alt="cart" />
          <p className="counterItens">{cart.length}</p>
          <button
            onClick={() =>
              history.location.pathname === "/"
                ? history.push("/cart")
                : history.push("/")
            }
          >
            Carrinho
          </button>
        </div>
        <div className="login">
          <img src={loginImg} alt="login" />
          <button>Entrar</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
