import React from "react";
import {Link} from "@reach/router"

import DeleteButton from "./DeleteButton";


export default (props)=> {
  
    const {products, setProducts} = props;
    
   
    const removeFromDom = (productId)=> {
        setProducts(products.filter(product => product._id != productId))
    }
    

   

    const display = 

     props.products.map( (product,i)=> {
        return(
            <div>
            
                 <Link key ={i} to={ product._id}>
                <p key={i}>{product.title}</p>
                  </Link> 
                 <DeleteButton productId ={product._id} successProcess={()=>removeFromDom(product._id)} />

           </div>
     )})
    
    return(
        <div>
        {display}
        </div>
    )
}