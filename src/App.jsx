import "bootstrap/dist/css/bootstrap.css";
import "./components/Nav";
import { NavComponent } from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeContainer } from "../src/containers/HomeContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { CategoryComponents } from "./containers/trial";
import { carritoContainer } from "../src/components/CarritoContainer";
import { useEffect } from "react";

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
    <BrowserRouter>
      <NavComponent />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route path="/carritoContainer" component={carritoContainer} />
        <Route path="/item/:category" component={CategoryComponents} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
