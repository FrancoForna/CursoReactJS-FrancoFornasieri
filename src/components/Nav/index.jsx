import "./navstyle.scss";
import { Link, useParams } from "react-router-dom";
import { CategoryComponents } from "../../containers/trial";

export const NavComponent = (product) => {
  return (
    <nav className="navBar">
      <div className="navBar_box">
        <div className="navBar_box1">
          <Link to="/" className="navBar_p">
            Dolce Vita
          </Link>
        </div>
        <div className="navBar_box2">
          <ul className="list">
            <li className="listM">
              <Link to="/" className="navBar_p">
                {/* <Link to={`/item/:${product.category}`} className="navBar_p"> */}
                Dolce Vita
              </Link>
            </li>
            <li className="listM">
              <Link to="/" className="navBar_p">
                Bebidas calientes
              </Link>
            </li>
            <li className="listM">
              <Link to="/" className="navBar_p">
                Comida
              </Link>
            </li>
            <li className="listM">
              <Link to="/" className="navBar_p">
                Bebidas frias
              </Link>
            </li>
            <li className="listM">
              <Link to="/" className="navBar_p">
                Dolce Vita
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
