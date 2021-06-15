import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import './components/Nav'
import { NavComponent } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <button className="btn btn-dark"> Probando </button>
        <NavComponent />
      </header>
    </div>
  );
}

export default App;
