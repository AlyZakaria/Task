import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAddProduct from "../../shared/useAddProduct";
function AddProductHeader(props){

    let [save, setSave] = useState(false);
    let [done , setDone] = useState(false);
    let navigate = useNavigate();

    useAddProduct(props , save, setSave, done, setDone);
    if(done){
        console.log('here');
        setDone(!done);
        navigate('/');
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
                    <button type="button" className = "btn btn-primary" onClick={() => setSave(!save)}>Save</button>
                    <button type="button" className = "btn btn-danger" onClick = {cancel}> Cancel</button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
export default AddProductHeader;