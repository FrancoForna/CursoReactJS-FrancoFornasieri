import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "./components/Nav";
import { NavComponent } from "./components/Nav";
import { ItemListContainer } from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent />
        {/* <ItemListContainer greeting={{ saludos: "bienvenido" }} /> */}
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
