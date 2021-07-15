import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

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
            <div>
              <div>producto:{product.item.name}</div>
              <div>cantidad:{product.cantidad}</div>
              <button onClick={() => removeItem(product)}>Eliminar item</button>
            </div>
          </>
        );
      })}{" "}
      <button onClick={() => clearCart()}>Vaciar Carrito</button>
    </>
  );
};
