import HeaderProductList from '../Headers/HeaderProductList/HeaderProductList'
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
            <HeaderProductList />
            <Products  />
        </ProductsContext.Provider>
    );
}

export default ProductList;