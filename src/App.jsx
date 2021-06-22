
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import './components/Nav'
import { NavComponent } from "./components/Nav";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent>
        <ItemListContainer greetin={"Hola y bienvenido"}/>
        </NavComponent>
      </header>
    </div>
  );
}

export default App;
