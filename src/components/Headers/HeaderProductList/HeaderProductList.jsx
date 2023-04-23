import './styles.css';
import { useContext, useState } from 'react';
import {ProductsContext} from '../../../contexts/productsContext';
import {useNavigate } from "react-router-dom";
import useDeleteProducts from "../../../shared/useDeleteProducts";
import Header from '../Header';

function HeaderProductList(){
    let {productsState , setProducts} = useContext(ProductsContext);
    let [deleteStatus, setDeleteStatus] = useState(false);
    let navigate = useNavigate();
    function blueFunc(){
        navigate('/addproduct')
    }
    useDeleteProducts(productsState, setProducts, deleteStatus, setDeleteStatus);

    function redFunc(){
        setDeleteStatus(!deleteStatus);
    }
    let redBtn = 'MASS DELETE';
    let blueBtn = 'ADD';
    let headerTitle = 'Product List';

    let props = {redBtn, blueBtn, headerTitle, redFunc, blueFunc};

    return <Header {...props}/>
}



export default HeaderProductList;