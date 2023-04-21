import './styles.css';
import { useContext, useState } from 'react';
import {ProductsContext} from '../../contexts/productsContext';
import {useNavigate } from "react-router-dom";
import useDeleteProducts from "../../shared/useDeleteProducts";


function Header(){
    let {productsState , setProducts} = useContext(ProductsContext);
    let [deleteStatus, setDeleteStatus] = useState(false);
    let navigate = useNavigate();
    function add(){
        navigate('/addproduct')
    }
    useDeleteProducts(productsState, setProducts, deleteStatus, setDeleteStatus);

    return(
        <div className = "container header">
            <div className = "row justify-content-between">
                <div className = "col-md-3  col-6 title">
                    <h1 >Product List</h1>
                </div>
                <div className = "col-md-5  col-6 d-flex   btns">
                    <button type="button" className = "btn btn-primary" onClick={add}>ADD</button>
                    <button type="button" className = "btn btn-danger" onClick={() => setDeleteStatus(!deleteStatus)}>MASS DELETE</button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}



export default Header;