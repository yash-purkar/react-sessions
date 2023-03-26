import './App.css';
import { SumCard } from './session-1/SumCard';

import { EmployeCard } from './session-1/EmployeCard';

import { Product } from './session-1/Product';

import { productDetails } from './session-1/ProductDetails';

import { ProductList } from './session-1/ProductList';

import { fruits } from './session-1/ProductDetails';

import { mobiles } from './session-1/ProductDetails';





function App() {
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
      <ProductList prodList={mobiles} productHeader={"Mobiles"} />
    </div>
  );
}

export default App;

//Props are nothing but passing value to the function using JSX syntax
