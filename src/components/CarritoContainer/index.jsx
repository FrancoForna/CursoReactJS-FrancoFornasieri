import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import "../styles.scss";

export const CarritoContainer = () => {
  const { cart, clearCart, removeItem } = useContext(ShopContext);
  console.log(cart.length);
  return (
    <>
      {cart.length !== 0 || (
        <div>
          No tienes productos en el carrito!
          <Link to="/">
            <button> Volver a inicio</button>
          </Link>{" "}
        </div>
      )}
      {cart.map((product) => {
        return (
          <>
            <div className="card">
              <div className="card_type">
                <div>producto:{product.item.name}</div>
                <div>cantidad:{product.cantidad}</div>
                <button onClick={() => removeItem(product)}>
                  Eliminar item
                </button>
                <Form></Form>
              </div>
            </div>
          </>
        );
      })}{" "}
      <button onClick={() => clearCart()}>Vaciar Carrito</button>
    </>
  );
};

export const Form = () => {
  const cartContext = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // console.log(results);
  // const [form, setForm] = useState({ name: "", email: "", phone: "" });
  // console.log(form);
  return (
    <>
      <div>
        <label for="name " className="form-label">
          Nombre
        </label>
        <input
          type="text"
          onInput={(e) => {
            setName(e.target.value);
          }}
        />
        <label for="email " className="form-label">
          Email
        </label>
        <input
          type="email"
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label for="tel " className="form-label">
          Telefono
        </label>
        <input
          type="tel"
          onInput={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            cartContext.createOrder(name, email, phone);
          }}
        >
          {" "}
          Enviar
        </button>
      </div>
    </>
  );
};
