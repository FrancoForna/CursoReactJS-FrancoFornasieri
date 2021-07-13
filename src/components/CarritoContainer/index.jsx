import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const CarritoContainer = () => {
  const { cart, clearCart, removeItem } = useContext(ShopContext);
  return (
    <>
      {cart.map((product) => {
        return (
          <>
            <div>
              <div>producto:{product.item.name}</div>
              <div>cantidad:{product.cantidad}</div>
              <button onClick={() => removeItem(product)}>Elminar item</button>
            </div>
          </>
        );
      })}{" "}
      <button onClick={() => clearCart()}>Vaciar Carrito</button>
    </>
  );
};
