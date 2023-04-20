import './styles.css';
import { useContext } from 'react';
import {ProductsContext} from '../../contexts/productsContext';
import {useNavigate } from "react-router-dom";


function Header(){
    let {productsState , setProducts} = useContext(ProductsContext);
    let navigate = useNavigate();
    function add(){
        navigate('/addproduct')
    }
    function deleteProducts(){
        let newProducts = productsState.filter(product => product.checked === false);
        setProducts(newProducts);
    }
    return(
        <div className = "container header">
            <div className = "row justify-content-between">
                <div className = "col-md-3  col-6 title">
                    <h1 >Product List</h1>
                </div>
                <div className = "col-md-5  col-6 d-flex   btns">
                    <button type="button" className = "btn btn-primary" onClick={add}>ADD</button>
                    <button type="button" className = "btn btn-danger" onClick={deleteProducts}>MASS DELETE</button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}



export default Header;