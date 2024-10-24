import ProductStyle from './Product.module.css'

export default function Products({product,action}){
    console.log(product.image);
     return (
        <div className={ProductStyle.card}>
            <img src={product.image} alt={product.description}/>
            <div>
                <h4>{product.title}</h4>
                <p>Price {product.price}</p>
                <button onClick={action}>Add To Cart</button>
            </div>
            
        </div>
        

     );
}