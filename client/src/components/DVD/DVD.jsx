

function DVD(props){
    return (
        <div>
                <label htmlFor="size">Size (MB)</label>
                <input type="text" ref = {props.sizeRef} name="size" id = "size" ></input>
        <p style = {{marginTop: '40px', textAlign: "left"}}><b>Please, provide disc space in MB.</b></p>
        </div>
    ); 
}

export default DVD;