import React, {useState , useEffect}from "react"
import axios from "axios"
import ProductsList from "../components/ProductsList"
import Form from "../components/Form"
import { navigate} from "@reach/router"

export default (props)=> {
    const [products , setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false)
  

 
      
      useEffect (()=> {
        axios.get("http://localhost:8000/api/products")
        .then(products=>{
            
            setProducts(products.data)
            
            setLoaded(true)

        })

    },[])
    const createProduct = ({title , price , description}) => {
        
        axios.post("http://localhost:8000/api/new" , {title , price, description})
         .then(res => {
         setProducts([...products ,res.data.productManager])
         navigate("/products")
         
       
         console.log(res)
         })
         .catch(err => console.log(err))
    }

          
  
    
  
    return(
    <div>
       
       <Form onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""  />
       < hr/>
       <h2>All Products</h2>
       
    {loaded && <ProductsList products={products} setProducts={setProducts} /> }
 
     </div>
    )

}