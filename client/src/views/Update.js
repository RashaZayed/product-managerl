import React,{useState , useEffect} from 'react'
import axios from "axios"
import {Link } from "@reach/router"
import Form from "../components/Form"


export default props => {
    const {id} = props ;
    const [title , setTitle] =useState();
    const [price, setPrice] = useState();
    const [description ,setDescription] = useState();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then(product => {
            setTitle(product.data.title)
            setPrice(product.data.price)
            setDescription(product.data.description)
        })
      
    },[])
        const updateProduct =({title , price , description})=> {
        axios.put("http://localhost:8000/api/products/"+id , {title , price , description})
        .then(product => console.log(product))
    }





    return(
        <div>
           <Form initialTitle = {title} initialPrice={price} initialDescription={description} onSubmitProp={updateProduct}/>
                <Link to="/products">
                    Go Back
                </Link>
            
        </div>

    )
}