import { createContext } from "react";
import { useEffect, useState } from "react";
import { getFirestore } from "../firebase/client";

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

  const createOrder = (name, email, phone) => {
    const order = {
      buyer: { email: email, name: name, phone: phone },
    };
    const db = getFirestore();
    db.collection("orders").add(order);
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
  // const getTotal = (product) => {

  // }
  useEffect(() => {}, [cart]);
  return (
    <ShopContext.Provider
      value={{ createOrder, cart, addToCart, clearCart, removeItem }}
    >
      {children}
    </ShopContext.Provider>
  );
};
