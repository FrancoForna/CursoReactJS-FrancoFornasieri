import { Link } from "react-router-dom";

export const CardComponent = ({ product }) => {
  const onAdd = (x) => {
    alert(`Agregaste ${x} productos al carrito`);
  };

  return (
    <div className="card">
      <div className="card_type">
        <h2 className="card_t">{product.name}</h2>
        <strong className="card_t">${product.price}</strong>
        <div className="card_under">
          <img className="card_img" src={product.img} alt="cafe" />
        </div>
        <button className="card_button">
          <Link to={`/item/${product.id}`}> Ver el producto </Link>
        </button>
      </div>
    </div>
  );
};
