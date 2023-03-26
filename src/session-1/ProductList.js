import { ProductCard } from "./ProductCard";

export const ProductList = ({ prodList, productHeader }) => {
  return (
    <>
      <h1>{productHeader}</h1>
      <ul>
        {prodList.map(({ id, name, price }) => (<ProductCard name={name} price={price} />))}
      </ul>
    </>
  );
};
