import React,{useState} from "react";
import axios from 'axios';

export default (props)=> {
    const {onSubmitProp , initialTitle , initialPrice , initialDescription} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price , setPrice] = useState(initialPrice);
    const [description , setDescription] = useState(initialDescription);
    
    
    const onSubmitHandler = e =>{
        e.preventDefault();
        onSubmitProp({title , price , description})
       
    }
    const styles= {
        h3 :{
            "color": "#007bff",
            "text-align" : "start",
        },
        button :{
            "margin-right": "500px"

        }
    }
    
    
    
    
    return(
    <div className="container">
        <form onSubmit={onSubmitHandler}>
            <div class="form-group">
            <h3 style={styles.h3}>Product Manager    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-basket2-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1z"/>
</svg>
            
            
            </h3>
         
            <p>
                
                <input type="text" class="form-control form-control-lg w-50" placeholder="Title" onChange={e => setTitle(e.target.value)} />
            </p> 
            <p>
                
                <input type="number" class="form-control form-control-lg w-50" placeholder="Price" onChange={e => setPrice(e.target.value)} />
                
            </p>
            <p>
                <input type="text" class="form-control form-control-lg w-50" placeholder="Description" onChange={e => setDescription(e.target.value)} />
            </p>
            </div>
            <input type="submit" class="btn btn-primary" style={styles.button} />
        </form>
    </div>

    )
}
// <Form onSubmitProp={createProduct} />