import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";
import "../ItemDetailContainer/product.scss";
import { getFirestore } from "../../firebase/client";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const DB = getFirestore(); //conexion a base de datos
      const COLLECTION = DB.collection("productos"); // que tomamos de la base de datos ---> en este caso coleccion
      const RESPONSE = await COLLECTION.get();
      const aux = RESPONSE.docs
        .map((element) => element.data())
        .find((element) => element.id === parseInt(id));
      setItems(aux);
    }
    getData();
  }, [id]);

  // useEffect(async () => {
  //   const take = await fetch("/json/cafes.json");
  //   const productos = await take.json();
  //   let aux = productos.find((element) => element.id === parseInt(id));
  //   setItems(aux);
  // }, [id]);

  return (
    <>
      <ItemDetailComponent product={items} />
    </>
  );
};
