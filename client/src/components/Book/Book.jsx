
function Book(){
    return (
        <div >
            <label htmlFor="weight">Weight (KG)</label>
            <input type="text" id="weight" name="weight"></input>
            <p style = {{marginTop: '40px'}}><b>Please, provide weight in kg.</b></p>
        </div>
    );
}

export default Book;