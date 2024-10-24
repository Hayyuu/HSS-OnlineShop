import { useEffect, useState } from "react";
import Product from '../Product/Products.jsx'
import shopStyle from './Shop.module.css'
export default function Shop(){
    const [quantity,setQuantity]=useState(0);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const [products,setProductData]=useState(null);

    function handleClick(){
        setQuantity(quantity+1);
    }
    useEffect( ()=>{
       setTimeout(()=>
            {const fetchData=async ()=>{
        try{
            let response=await fetch('https://fakestoreapi.com/products?limit=8');
            if(!response.ok){
                throw new Error(`Http error :Status ${response.status}`);
            }
            let productsData=await response.json();
            setProductData(productsData);
            setError(null);
        }
        catch(err){
            setError(err.msg);
            setProductData(null);
        }
        finally{
            setLoading(false);
            }
        }
        
    
    fetchData();
    },2000);
    },[]);
    console.log(products);
    return (
        <div className={shopStyle.shop}>
            <div className={shopStyle.top}>
                <p>Items in cart <em>{quantity}</em></p>
                <button onClick={handleClick}>Checkout</button> 
            </div>   
            <div className={shopStyle.bottom}>
                     
           {(loading &&  <div className={shopStyle.loader}>
                   <h3 className={shopStyle.loader}>loading...</h3> </div>  ) || 
            products.map((product,key) => {
                return <Product key={product.id} product={product} action={handleClick}/>;})
            
            }
            </div> 
            
            
        </div>
    );
 }    