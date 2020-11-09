import React,{useEffect,useState} from "react"
import axios from "axios"
import {Link , navigate} from "@reach/router"
import DeleteButton from "../components/DeleteButton";

    
    
   export default(props)=> {
    const [product , setProduct] = useState({});
     console.log("props are"+ props.id)


    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + props.id)
        .then(res => setProduct({
            ...res.data
        }))
        
    }, [])
    
    return(
        <div>
            <h3>
                {product.title}
            </h3>
            <div>
                {product.price}<br />
                {product.description}
            </div>
            <Link to={"/products/update/"+ props.id}>
            <button>Edit</button>
            </Link>

            <DeleteButton productId={props.id} successProcess= {()=>navigate ('/products')} />
        </div>
    )
}