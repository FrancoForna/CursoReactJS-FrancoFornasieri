import React from "react";
import { useState } from "react";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import "./detail.scss";

export const ItemDetailComponent = ({ product }) => {
  const [random, setRandom] = useState(null);
  const onAdd = (x) => {
    alert(`Has agregado ${x} productos al carrito`);
    setRandom("para carrito");
  };
  return (
    <>
      <div className="card2">
        <div className="card2_under">
          <img className="card2_img" src={product.img} alt="cafe" />
          <p className="card2_t2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor
            error, quas incidunt aperiam sapiente eos nostrum voluptate sed
            itaque deserunt molestiae a officiis accusamus maiores. Quod
            consectetur itaque quasi?
          </p>
        </div>
        <div className="card2_type">
          <h2 className="card2_t">{product.name}</h2>
          <strong className="card2_t">${product.price}</strong>
          <strong className="card2_t">Stock: {product.stock}</strong>
          {!random ? (
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          ) : (
            <Link to={"/carritoContainer"}>
              <button className="carrito_butt">Terminar compra</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
