import './styles.css';
import Book from '../Book/Book';
import DVD from '../DVD/DVD';
import Furniture from '../Furniture/Furniture';

function AddProductForm(props){
    
    return (
        <div className="container">
            <form>
                <div className="formContainer row">
                    <div className = "">
                        <label htmlFor="sku">SKU</label> 
                        <input type="text" ref = {props.skuRef}></input>
                    </div>
                    <div>
                        <label htmlFor="name">Name</label> 
                        <input type="text" ref = {props.nameRef}></input>
                    </div>
                    <div>
                        <label htmlFor="price">Price ($)</label> 
                        <input type="text" ref = {props.priceRef}name="price" id="price"></input>
                    </div>
                    <div>
                        <label htmlFor="type">Type Switcher</label>
                        <select id="type" name="products" onChange={(e) => props.setType(e.target.value)} >
                            <option value="DVD">DVD-disc</option>
                            <option value="Book">Book</option>
                            <option value="Furniture">Furniture</option>
                        </select> 
                    </div>
                    {props.type === "Book" ? <Book {...props}/>: props.type === "DVD"? <DVD {...props}/>: <Furniture {...props}/>}
                </div>
            </form>
        </div>
    );
}   

export default AddProductForm;