import Header from '../Header/Header'
import Products from '../Products/Products'
import  {ProductsContext}  from '../../contexts/productsContext';
import {useState } from 'react';
import useGetProducts from '../../shared/useGetProducts';
;

function ProductList() {
    let [productsState, setProducts] = useState([]);
    useGetProducts(setProducts);
    return(
        <ProductsContext.Provider value = {{productsState,setProducts}}>
            <Header />
            <Products  />
        </ProductsContext.Provider>
    );
}

export default ProductList;