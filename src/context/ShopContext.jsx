import { createContext } from "react";
import { useEffect, useState } from "react";

export const ShopContext = createContext();
console.log(ShopContext);

export const ShopComponentContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => cart.find((element) => element.item.id === id);
  function addToCart(item, cantidad) {
    console.log(item);
    if (isInCart(item.id)) {
      console.log("hola");
      const newCart = cart.map((element) => {
        if (element.item.id === item.id) {
          return { ...element, cantidad: element.cantidad + cantidad };
        } else return element;
      });
      setCart(newCart);
    } else setCart([...cart, { item, cantidad }]);
  }
  const clearCart = () => {
    setCart([]);
  };
  const removeItem = (product) => {
    let newCart = [];
    cart.map((element) => {
      if (element !== product) {
        newCart = [...newCart, element];
      }
    });
    setCart(newCart);
  };
  useEffect(() => {}, [cart]);
  return (
    <ShopContext.Provider value={{ cart, addToCart, clearCart, removeItem }}>
      {children}
    </ShopContext.Provider>
  );
};
