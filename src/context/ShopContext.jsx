import { createContext } from "react";
import { useEffect, useState } from "react";

export const ShopContext = createContext();
console.log(ShopContext);

export const ShopComponentContext = ({ children }) => {
  const [cart, setCart] = useState();
  const addToCart = (product, cantidad) => {
    setCart([...cart, { product, cantidad }]);
    console.log(cart);
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};
