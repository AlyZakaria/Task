import HeaderProductList from "@components/Headers/HeaderProductList/HeaderProductList";
import Products from "@components/Products/Products";
import { ProductsContext } from "@contexts/productsContext";
import { useState } from "react";
import useGetProducts from "@hooks/useGetProducts";
import Loading from "@components/Loading/Loading";

function ProductList() {
  let [productsState, setProducts] = useState([]);
  let loading = useGetProducts(setProducts);
  return (
    <ProductsContext.Provider value={{ productsState, setProducts }}>
      <HeaderProductList />
      {!loading && <Products />}
      {loading && <Loading />}
    </ProductsContext.Provider>
  );
}

export default ProductList;
