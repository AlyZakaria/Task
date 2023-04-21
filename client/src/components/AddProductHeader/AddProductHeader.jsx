import { useNavigate } from "react-router-dom";

function AddProductHeader(){

    let navigate = useNavigate();
  
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
                    <button type="button" className = "btn btn-primary" >Save</button>
                    <button type="button" className = "btn btn-danger" onClick = {cancel}> Cancel</button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
export default AddProductHeader;