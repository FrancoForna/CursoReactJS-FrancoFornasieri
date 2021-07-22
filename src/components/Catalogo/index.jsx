import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getFirestore } from "../../firebase/client";

export const CardComponent = ({ product }) => {
  useEffect(() => {
    async function getData() {
      const DB = getFirestore(); //conexion a base de datos
      const COLLECTION = DB.collection("productos"); // que tomamos de la base de datos ---> en este caso coleccion
      const RESPONSE = await COLLECTION.get();
      console.log(RESPONSE.docs.map((element) => element.data()));
    }
    getData();
  }, []);

  return (
    <div className="card">
      <div className="card_type">
        <h2 className="card_t">{product.category}</h2>
        <strong className="card_t">${product.price}</strong>
        <div className="card_under">
          <img className="card_img" src={product.img} alt="cafe" />
        </div>
        <button className="card_button">
          <Link to={`/item/${product.id}`}> Ver el producto </Link>
        </button>
      </div>
    </div>
  );
};
