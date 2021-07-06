import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";
import "../ItemDetailContainer/product.scss";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(async () => {
    const take = await fetch("/json/cafes.json");
    const productos = await take.json();
    let aux = productos.find((element) => element.id === parseInt(id));
    setItems(aux);
  }, [id]);

  return (
    <>
      <ItemDetailComponent product={items} />
    </>
  );
};
