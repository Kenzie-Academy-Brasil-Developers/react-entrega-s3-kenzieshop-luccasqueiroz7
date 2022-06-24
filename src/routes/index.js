import { Route, Switch } from "react-router-dom";
import Cart from "../components/Cart";
import Products from "../components/Products";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;
