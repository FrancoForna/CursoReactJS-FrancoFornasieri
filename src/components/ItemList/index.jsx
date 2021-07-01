import { CardComponent } from "../CardComponent";

export const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <CardComponent key={product.id} product={product} />;
      })}
    </div>
  );
};
