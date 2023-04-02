import React, { useEffect, useState } from "react";
import { fakeFetch, fakeFetch2, fakeFetch3, fakeFetch4 } from "./Data";

// Exercise2️⃣
export const Exercise2 = () => {
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/employees");
      if (status === 200) console.log({ data: data.employees })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="App">
      <div className="App">
        <h1>Employee List</h1>
      </div>
      <button onClick={getData}> get employee list</button>
    </div>
  );
}

// Exercise3️⃣
export const Exercise3 = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch2("https://example.com/api/products");
      if (status === 200) setProducts(data.products);
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="App">
      <div className="App">
        <div className="App">
          <h1>My Products</h1>
        </div>
        <button onClick={getData}>get products details</button>
      </div>
      <ul> {
        products.map(({ id, name, price, quantity }) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>{price}</p>
              <p>{quantity}</p>
            </li>
          )
        })
      }</ul>
    </div>
  );
}
//1st there was nothing on state variable data , so map won't print anything and then once we click on btn then products will pe set as a data.products, and then whole component will rerender and then the products will be printed using map.


// Exercise4️⃣
export const Exercise4 = () => {
  const [transactions, setTransactions] = useState([]);
  const [isHighlight, setIsHighlight] = useState(false);
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch3("https://example.com/api/transactions");
      if (status === 200) setTransactions(data.transactions);
    } catch (err) {
      console.log(err)
    }
  }
  const clickHandler = () => setIsHighlight(!isHighlight);

  return (
    <div className="App">
      <div className="App">
        <h1>My Transactions</h1>
      </div>
      <button onClick={getData}>get transactions details</button>
      <button onClick={clickHandler}>highlight transactions greater than 1000</button>

      <ul>
        {transactions.map(({ id, amount, date, gateway }) => {
          return (
            <li key={id} style={{ border: isHighlight && amount > 1000 ? "2px solid orange" : "none" }}>
              <h3>{amount}</h3>
              <p>{date}</p>
              <p>{gateway}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}


// Exercise7️⃣
export const Exercise7 = () => {
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch4("https://example.com/api/wishlist");
      if (status === 200) console.log({ data: data.wishlist })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <div className="App">
        <h1> Showcase Products </h1>
      </div>
    </div>
  );
}

// Exercise8️⃣
export const Exercise8 = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch4("https://example.com/api/wishlist")
      if (status === 200) setData(data.wishlist)
    } catch (err) { console.log(err) }
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <div className="App">
        <h1> Showcase Products </h1>
      </div>
      <ul>
        {
          data.map(({ name, price, quantity }) => {
            return (
              <li key={name}>
                <h4>Name: {name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

// Exercise9️⃣&🔟
export const Exercise9 = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false); //Step I
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsLoading(true)
    try {
      const { status, data } = await fakeFetch4("https://example.com/api/wishlist")
      if (status === 200) setData(data.wishlist)
      setIsLoading(false) //Step IIB
    } catch (err) {
      setIsLoading(false);
      setIsError(true)
      console.log(err)
    }
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <div className="App">
        <h1> Showcase Products </h1>
        <p>{isLoading && "Loading..."}</p>
        <p>{isError && "Error"}</p>
        {/* Step III */}
      </div>
      <ul>
        {
          data.map(({ name, price, quantity }) => {
            return (
              <li key={name}>
                <h4>Name: {name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
/*
Step I: No data in the first render.
Step IA: Create a state variable, initial value is isLoading = true;
Step II: After the first render async getData function will triggered and data will come
Step IIA: isLoading to false
--> state of the data is changed
Step III: Then again, render will happen we'll be able to see the data
*/