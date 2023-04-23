import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAddProduct from "../../../shared/useAddProduct";
import Header from "../Header";

function AddProductHeader(props){

    let [save, setSave] = useState(false);
    let [done , setDone] = useState(false);
    let navigate = useNavigate();

    useAddProduct(props , save, setSave, done, setDone);
    if(done){
        setDone(!done);
        navigate('/Task');
    }
    function blueFunc(){
        setSave(!save);
    }
    function redFunc(){
        navigate('/Task');
    }
    let redBtn = 'Cancel';
    let blueBtn = 'Save';
    let headerTitle = 'Product Add';
    
    let data = {redBtn, blueBtn, headerTitle, redFunc, blueFunc};

    return <Header {...data}/>

}
export default AddProductHeader;