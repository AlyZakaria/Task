import './styles.css';
import { useContext } from 'react';
import {ProductsContext} from '../../contexts/productsContext';


function Product(props) {
    let {productsState , setProducts} = useContext(ProductsContext);
    let product = props.product;

    function inputCheck(){
        let newProduct = {...product, checked: !product.checked};
        setProducts(productsState.map(e => e.sku === newProduct.sku? newProduct: e));
    }
    return (
        <div className="product col-lg-2 col-md-3 col-sm-5 col-12">
            <div className="d-flex justify-content-left check">
                <input type="checkbox" id = {product.sku} onClick={inputCheck} />
            </div>
            <div>
                <p>{product.sku}</p>
                <p>{product.name}</p>
                <p>{Number(product.price).toFixed(2)}</p>
                <p>Size: {product.attributes}</p>
            </div>
        </div>
    );
}

export default Product;