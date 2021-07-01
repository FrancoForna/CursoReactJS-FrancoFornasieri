import React from "react";
import { ItemCount } from "../ItemCount";

export const ItemDetailComponent = ({ product }) => {
  const onAdd = (x) => {
    alert(`Has agregado ${x} productos al carrito`);
  };

  return (
    <>
      <div className="card">
        <h2 className="card_t">{product.name}</h2>
        <strong className="card_t">${product.price}</strong>
        <strong className="card_t">Stock: {product.stock}</strong>
        <div className="card_under">
          <img className="card_img" src={product.img} alt="cafe" />
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};
