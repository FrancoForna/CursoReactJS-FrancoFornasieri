
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
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="btn btn-dark"> Probando </button> */}
      </header>
    </div>
  );
}

export default App;
