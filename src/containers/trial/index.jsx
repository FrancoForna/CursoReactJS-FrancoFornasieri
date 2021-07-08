import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";

export const CategoryComponents = () => {
  const [productsCategories, setProductsCategories] = useState([]);
  const { category } = useParams();

  useEffect(async () => {
    const taking = await fetch("./json/cafes.json");
    const lf = await taking.json();
    let productByCategory = lf.find(
      (element) => element.category === parseInt(category)
    );
    setProductsCategories(productByCategory);
  }, [category]);
  return (
    <>
      <ItemDetailComponent other={productsCategories} />
    </>
  );
};
