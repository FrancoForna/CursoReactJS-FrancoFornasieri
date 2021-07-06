import "./cardstyles.scss";
import { useState, useEffect } from "react";
import { ItemList } from "../../components/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await fetch("./json/cafes.json");
    const data = await response.json();
    setProducts(data);
  }, []);

  return (
    <>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
};
