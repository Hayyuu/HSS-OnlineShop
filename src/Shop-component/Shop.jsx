import { useEffect, useState } from "react";

export default function Shop(){
    const [quantity,setQuantity]=useState(0);
    // const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const [products,setProductData]=useState(null);

    function handleClick(){
        setQuantity(quantity+1);
    }
    // useEffect( ()=>{
    //     const fetchData=async ()=>{
    //     try{
    //         let response=await fetch('https://fakestoreapi.com/products?limit=5');
    //         if(!response.ok){
    //             throw new Error(`Http error :Status ${response.status}`);
    //         }
    //         let productsData=await response.json();
    //         setProductData(productsData);
    //         setError(null);
    //     }
    //     catch(err){
    //         setError(err.msg);
    //         setProductData(null);
    //     }
    //     finally{
    //         setLoading(false);
    //         }
    //     }
    
    // fetchData();

    // },[]);
    return (
        <div>
            <aside>
                <button onClick={handleClick}>Checkout</button>
                <h1>{quantity}</h1>
            </aside>
            <div>
            <button onClick={handleClick}>Add To Cart</button>
            <h1>{loading}</h1>
            <h1>{products}</h1>
            </div>
        </div>
    );
 }    