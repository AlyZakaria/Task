import './App.css';
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer';
import {useState } from 'react';
import  {allProducts,ProductsContext}  from './contexts/productsContext';

function App() {
  let [productsState, setProducts] = useState(allProducts);

  return (
    <div className="App">
      <ProductsContext.Provider value = {{productsState,setProducts}}>
          <Header />
          <Products  />
          <Footer />
      </ProductsContext.Provider>
    </div>
  );
}


export default App;
