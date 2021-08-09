import "../styles.scss";
import { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/client";
import { CardComponent } from "../../components/Catalogo";

export const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <CardComponent key={product.id} product={product} />;
      })}
    </div>
  );
};

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  // useEffect(async () => {
  //   const response = await fetch("./json/cafes.json");
  //   const data = await response.json();
  //   setProducts(data)
  // }, []);

  useEffect(() => {
    async function getData() {
      const DB = getFirestore(); //conexion a base de datos
      const COLLECTION = DB.collection("productos"); // que tomamos de la base de datos ---> en este caso coleccion
      const RESPONSE = await COLLECTION.get();
      console.log(RESPONSE);
      console.log(RESPONSE.docs.map((element) => element.data()));
      setProducts(RESPONSE.docs.map((element) => element.data()));
    }
    getData();
  }, []);
  return (
    <>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
};
