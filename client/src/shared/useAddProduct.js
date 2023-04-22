import { useEffect } from "react";
import {priceValid, attributesValid} from '../regex/regex';
import axios from "../apis/axios";
import urls from "../apis/url"

const url = urls.addProduct;


function check(props){

    if(props.skuRef.current.value === ''){
        alert('SKU value is missing');
        return false;
    }
    if(props.nameRef.current.value === ''){
        alert("Name value is missing");
        return false;
    }
    if(!priceValid(props.priceRef.current.value)){
        alert("Price value is not valid!");
        return false;
    } 
    let product = {
        sku: props.skuRef.current.value,
        name: props.nameRef.current.value,
        price: props.priceRef.current.value,
    }

    if(props.type === "Book"){
        if(props.weightRef.current.value ===''|| !attributesValid(props.weightRef.current.value)){
            alert("Weight value is not valid!");
            return false;
        }
        
        product['weight'] = props.weightRef.current.value + " KG";
    }
    else if(props.type === "DVD"){
        if(props.sizeRef.current.value === ''|| !attributesValid(props.sizeRef.current.value)){
            alert("Size value is not valid!");
            return false;
        }
        product['size'] = props.sizeRef.current.value + " MB";
    }
    else if(props.type === "Furniture"){
            let length = props.lengthRef.current.value;
            let width = props.widthRef.current.value;
            let height = props.heightRef.current.value;
        if(length === '' || width === '' ||height === '' || !attributesValid(length, width, height)){
            alert("Desminsions values is not valid");
            return false;
        }
        product = {
            ...product,
            type: props.type,
            length: length,
            width: width,
            height: height
        }
    }
    product['type'] = props.type;
return product;
}


function useAddProduct(props , save, setSave, done, setDone){
    async function addProduct (){
        try{
            let product = check(props);
            if(!product) return false;         
            const response = await axios.post(url,  JSON.stringify(product));
            if(response.status === 200) setDone(true);
            else {
                setDone(false);
            }
        }catch(err){
            if(err.response.status === 409) alert('SKU already exists!!');
            setDone(false);
        }finally{
            setSave(!save);
        }
    }

    useEffect(() => {
        if(save) addProduct();
    // eslint-disable-next-line
    }, [save])
}

export default useAddProduct;