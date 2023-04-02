import { SumCard } from './Components/SumCard';

import { EmployeCard } from './Components/EmployeCard';

import { Product } from './Components/Product';

import { productDetails } from './Components/ProductDetails';

import { ProductList } from './Components/ProductList';

import { fruits } from './Components/ProductDetails';

// import { mobiles } from './Components/ProductDetails';

import { EmpCard } from './Components/EmployeCard';

import { MyCart } from './Components/MyCart';
import { mycart } from './Components/ProductDetails';

import { UseState } from './Components/UseState';

import React from 'react'

export const Questions = () => {
  return (
    <div className="App">
      {/* Session One */}
      <SumCard num1={4} num2={5} />
      <hr />
      <EmployeCard />
      <hr />
      <Product product={productDetails} />
      <hr />
      <ProductList prodList={fruits} productHeader={"Fruits"} />
      <hr />
      {/* <ProductList prodList={mobiles} productHeader={"Mobiles"} /> */}
      <EmpCard />
      <hr />
      <MyCart mycart={mycart} heading="My Cart" />
      <hr />
      <UseState />
    </div>
  )
}
