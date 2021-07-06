import "./Home.scss";
import { ItemListContainer } from "../ItemListContainer";

export const HomeContainer = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer />
      </header>
    </div>
  );
};
