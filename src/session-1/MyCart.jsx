const ShowCartItems = ({ name, price }) => <li>{name}: Rs. {price}</li>;

export const MyCart = ({ mycart, heading }) => {
  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h1>{heading}</h1>
      <ol>
        {
          mycart.map(({ name, price }) => <ShowCartItems name={name} price={price} />)
        }
        {

        }
      </ol>
    </div>
  )
}