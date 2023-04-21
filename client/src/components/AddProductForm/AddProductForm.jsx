import { useState } from 'react';
import './styles.css';
import Book from '../Book/Book';
import DVD from '../DVD/DVD';
import Furniture from '../Furniture/Furniture';

function AddProductForm(){
    let [type , setType] = useState("DVD");

    return (
        <div className="container">
            <form>
                <div className="formContainer row">
                    <div className = "">
                        <label htmlFor="sku">SKU</label> 
                        <input type="text" name="sku" id="sku"></input>
                    </div>
                    <div>
                        <label htmlFor="name">Name</label> 
                        <input type="text" name="name" id="name"></input>
                    </div>
                    <div>
                        <label htmlFor="price">Price ($)</label> 
                        <input type="text" name="price" id="price"></input>
                    </div>
                    <div>
                        <label htmlFor="type">Type Switcher</label>
                        <select id="type" name="products" onChange={(e) => setType(e.target.value)} >
                            <option value="DVD">DVD-disc</option>
                            <option value="Book">Book</option>
                            <option value="Furniture">Furniture</option>
                        </select> 
                    </div>
                    {type === "Book" ? <Book />: type === "DVD"? <DVD/>: <Furniture/>}
                </div>
            </form>
        </div>
    );
}   

export default AddProductForm;