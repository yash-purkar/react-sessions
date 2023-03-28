import { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);
  // console.log(useState(0)) 
  return (
    <>
      <h1 style={{ color: count > 10 ? "red" : "black" }}>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <button onClick={() => setCount(count => 0)}>Reset</button>
    </>

  )
}

//When ever state variable value is changed the view is rerendered.
//useState is returning two elements in an array 1st is a state variable and 2nd is a function to update that state variable.
//And what ever value we pass in () to useState it makes initial value of state variable