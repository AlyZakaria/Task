import { useEffect } from 'react';
import axios from '../apis/axios';
import urls from '../apis/url.json';
const url = urls.getProducts

function useGetProducts(setProducts){
    useEffect( () =>{
        async function fetchData(){
            try{
                const response = await axios.get(url);
                if(response.status === 200)
                    setProducts(response.data.map((p) =>{
                        return {...p,checked:false}
                    } ));
            }catch(err){

            }
        };
        fetchData();
    },[])
}

export default useGetProducts;