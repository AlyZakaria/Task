import { useNavigate } from "react-router-dom";
import {priceValid, attributesValid} from '../../regex/regex';

function AddProductHeader(props){

    let navigate = useNavigate();

    function check(){
        if(props.skuRef.current.value === ''){
            alert('SKU value is missing');
            return;
        }
        if(props.nameRef.current.value === ''){
            alert("Name value is missing");
            return;
        }
        if(!priceValid(props.priceRef.current.value)){
            alert("Price value is not valid!");
            return;
        } 
        if(props.type === "Book"){
            let weight = props.weightRef.current.value;
            if(weight == ''|| !attributesValid(weight)) alert("Weight value is not valid!");
            return;
        }
        else if(props.type === "DVD"){
            let size = props.sizeRef.current.value;
            if(size === ''|| !attributesValid(size)) alert("Size value is not valid!");
            return;
        }
        else if(props.type === "Furniture"){
            let length = props.lengthRef.current.value;
            let width = props.widthRef.current.value;
            let height = props.heightRef.current.value;

            if(length === '' || width === '' ||height === '' || !attributesValid(length, width, height)) 
                alert("Desminsions values is not valid");
            return;
        }
        
    }
    
    function cancel(){
        navigate('/');
    }
    return(
        <div className = "container header">
            <div className = "row justify-content-between">
                <div className = "col-md-3  col-6 title">
                    <h1 >Product Add</h1>
                </div>
                <div className = "col-md-5  col-6 d-flex   btns">
                    <button type="button" className = "btn btn-primary" onClick={check}>Save</button>
                    <button type="button" className = "btn btn-danger" onClick = {cancel}> Cancel</button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
export default AddProductHeader;