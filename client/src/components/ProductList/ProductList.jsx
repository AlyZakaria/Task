import Header from '../Header/Header'
import Products from '../Products/Products'
import Footer from '../Footer/Footer';
import  {allProducts,ProductsContext}  from '../../contexts/productsContext';
import {useState } from 'react';

function ProductList() {
    let [productsState, setProducts] = useState(allProducts);
    return(
        <ProductsContext.Provider value = {{productsState,setProducts}}>
            <Header />
            <Products  />
            <Footer />
        </ProductsContext.Provider>
    );
}

export default ProductList;