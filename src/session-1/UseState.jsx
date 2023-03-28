import { useState } from "react";



export const UseState = () => {
  const [count, setCount] = useState(0);
  // console.log(useState(0)) 
  return (
    <>
      <h1 style={{ color: count > 10 ? "red" : "black" }}>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <button onClick={() => setCount(count => 0)} style={{ marginBottom: "10px" }}>Reset</button>
      <Fruits />
    </>

  )
}


const fruits = [
  { id: 1, name: "Apple", price: 200 },
  { id: 2, name: "Orange", price: 150 },
  { id: 3, name: "Grapes", price: 90 },
  { id: 4, name: "Pineapple", price: 70 }
];

const Fruits = () => {
  const [shouldHighlight, setShouldHighlight] = useState(false);
  return (
    <>
      <h1>Fruits</h1>
      {fruits.map(({ name, price }) => <p style={{ color: shouldHighlight && price > 100 ? "red" : "black" }}>Name: {name}, Price: {price}</p>)}
      <button onClick={() => setShouldHighlight(true)}>Highlight Costly Fruits</button>
      <button onClick={() => setShouldHighlight(false)}>Reset</button>
      <button onClick={() => setShouldHighlight(shouldHighlight => shouldHighlight ? false : true)}>Toggle</button> {/* !shouldHighlight */}
    </>
  )
}

//When ever state variable value is changed the view is rerendered.
//useState is returning two elements in an array 1st is a state variable and 2nd is a function to update that state variable.
//And what ever value we pass in () to useState it makes initial value of state variable