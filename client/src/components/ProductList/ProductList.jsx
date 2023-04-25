import HeaderProductList from '../Headers/HeaderProductList/HeaderProductList'
import Products from '../Products/Products'
import  {ProductsContext}  from '../../contexts/productsContext';
import {useState } from 'react';
import useGetProducts from '../../shared/useGetProducts';
import Loading from '../Loading/Loading';

function ProductList() {
    let [productsState, setProducts] = useState([]);
    let loading = useGetProducts(setProducts);
    return(
        <ProductsContext.Provider value = {{productsState,setProducts}}>
            <HeaderProductList />
            {!loading && <Products />}
            {loading && <Loading />}
        </ProductsContext.Provider>
    );
}

export default ProductList;