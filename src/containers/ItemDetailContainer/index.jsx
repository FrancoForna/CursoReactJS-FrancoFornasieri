import { useState, useEffect } from "react";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const take = await fetch("./json/cafes.json");
    const productos = await take.json();
    setItems(productos[0]);
  }, []);

  return (
    <>
      <ItemDetailComponent product={items} />
    </>
  );
};
