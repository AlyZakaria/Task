import { useEffect } from "react";
import axios from "../apis/axios";
import urls from "../apis/url";

const url = urls.deleteProducts;

function useDeleteProducts(productsState, setProducts, deleteStatus, setDeleteStatus) {
    
    const deleteProducts = async () => {
        try{
            let deletedProducts = productsState.filter(product => product.checked === true);
            let newProducts = productsState.filter(product => product.checked === false);
            const response = await axios.post(url, JSON.stringify(deletedProducts));
            if(response.status === 200)
                setProducts(newProducts);
            
        }catch(err){
        }finally{
            setDeleteStatus(!deleteStatus);            
        }
    }
    
    useEffect(() => {
        if(deleteStatus) deleteProducts();
    }, [deleteStatus])
}

export default useDeleteProducts;