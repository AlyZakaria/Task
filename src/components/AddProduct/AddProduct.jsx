import AddProductHeader from '../Headers/AddProductHeader/AddProductHeader'
import AddProductForm from '../AddProductForm/AddProductForm'
import { useState, useRef } from 'react';
function AddProduct() {
    let skuRef  = useRef();
    let nameRef = useRef();
    let priceRef = useRef();
    let lengthRef = useRef();
    let weightRef = useRef();
    let widthRef = useRef();
    let heightRef = useRef();
    let sizeRef = useRef();
 

    let [type , setType] = useState("DVD");
    let value = {
        skuRef,
        nameRef,
        priceRef,
        lengthRef,
        weightRef,
        widthRef,
        heightRef,
        sizeRef,
        type, setType
    } 
    return (
        <div>
            <AddProductHeader  {...value}/>
            <AddProductForm   {...value} />
        </div>

    );
}

export default AddProduct;
