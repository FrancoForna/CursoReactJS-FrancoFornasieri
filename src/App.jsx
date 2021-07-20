import "bootstrap/dist/css/bootstrap.css";
import "./components/Nav";
import { NavComponent } from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeContainer } from "../src/containers/HomeContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { CategoryComponents } from "./containers/trial";
import { CarritoContainer } from "../src/components/CarritoContainer";
import { useEffect } from "react";
import { ShopComponentContext } from "./context/ShopContext";

function App() {
  function saludar() {
    console.log("saludo");
  }
  useEffect(() => {
    window.addEventListener("click", saludar);
    return () => {
      window.removeEventListener("click", saludar);
    };
  });

  return (
    <ShopComponentContext>
      <BrowserRouter>
        <NavComponent />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/carritoContainer" component={CarritoContainer} />
          <Route path="/item/:category" component={CategoryComponents} />
        </Switch>
      </BrowserRouter>
    </ShopComponentContext>
  );
}

export default App;
