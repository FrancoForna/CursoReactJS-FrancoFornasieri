import "bootstrap/dist/css/bootstrap.css";
import "./components/Nav";
import { NavComponent } from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeContainer } from "../src/containers/HomeContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavComponent />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
