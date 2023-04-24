

function Header(props){
 
    return(
        <div className = "container header">
            <div className = "row justify-content-between">
                <div className = "col-md-3  col-6 title">
                    <h1>{props.headerTitle}</h1>
                </div>
                <div className = "col-md-5  col-6 d-flex   btns">
                    <button type="button" className = "btn btn-primary" onClick={props.blueFunc}>{props.blueBtn}</button>
                 {
                 (props.productsState != 0) && <button type="button" className = "btn btn-danger" onClick={props.redFunc}>{props.redBtn}</button>
                 ||
                 (props.productsState == 0) && <button type="button" className = "btn btn-danger" onClick={props.redFunc} disabled>{props.redBtn}</button>
                 }
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
export default Header;