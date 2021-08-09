import { useState } from "react";
import "../styles.scss";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  function agregar(contador, stock) {
    if (contador < stock) {
      return contador + 1;
    } else {
      return (contador = stock);
    }
  }
  function restar(contador) {
    if (contador > 1) {
      return contador - 1;
    } else {
      return (contador = 1);
    }
  }
  return (
    <>
      <section className="carrito">
        <button
          className="carrito_but"
          onClick={() => {
            setContador(agregar(contador, stock));
          }}
        >
          {" "}
          +{" "}
        </button>
        <p className="carrito_numb">{contador}</p>
        <button
          className="carrito_but"
          onClick={() => {
            setContador(restar(contador, stock));
          }}
        >
          {" "}
          -{" "}
        </button>
        <br></br>
        <button
          className="carrito_but2"
          onClick={() => {
            onAdd(contador);
          }}
        >
          {" "}
          Agregar al Carrito{" "}
        </button>
      </section>
    </>
  );
};
