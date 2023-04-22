
function Furniture(props){
    return (
        <>
            <div>
                <label htmlFor="height">Height (CM)</label>
                <input type="text" ref = {props.heightRef} id="height" name="height" ></input>
            </div>
            <div>
                <label htmlFor="width">Width (CM)</label>
                <input type="text" ref = {props.widthRef} id="width" name="width"></input>
            </div>
            <div>
                <label htmlFor="length">Length (CM)</label>
                <input type="text" ref = {props.lengthRef} id="length" name="length"></input>
            </div>
            <p style = {{marginTop: '40px', textAlign: "left"}}><b>Please, provide dimensions in HxLxW format.</b></p>
        </>
    );
}

export default Furniture;