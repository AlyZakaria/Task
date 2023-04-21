
function Furniture(){
    return (
        <>
            <div>
                <label htmlFor="height">Height (CM)</label>
                <input type="text" id="height" name="height"></input>
            </div>
            <div>
                <label htmlFor="width">Width (CM)</label>
                <input type="text" id="width" name="width"></input>
            </div>
            <div>
                <label htmlFor="length">Length (CM)</label>
                <input type="text" id="length" name="length"></input>
            </div>
            <p style = {{marginTop: '40px', textAlign: "left"}}><b>Please, provide dimensions in HxLxW format.</b></p>
        </>
    );
}

export default Furniture;