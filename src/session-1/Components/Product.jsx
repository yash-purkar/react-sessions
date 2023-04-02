
export const Product = ({ product }) => {

  const { name, price, specification, warranty } = product;
  return (
    <>
      <h1>{name}</h1>
      <p>Price: INR {price}</p>
      <p>Specification: {specification}</p>
      <p>Warranty: {warranty}</p>
    </>
  )
}