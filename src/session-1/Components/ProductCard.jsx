
const isRed = price => price > 50 ? "red" : "black";

export const ProductCard = ({ id, name, price }) => {
  return (
    <>
      <li style={{ color: isRed(price) }}>{name}: INR {price}</li>
    </>
  )
}

//style - If you are using js in html i.e jsx so we have to use in {} but in style attribute we already gave the {} brackets for js so we didn't write isRed in curly like {isRed(price)}.