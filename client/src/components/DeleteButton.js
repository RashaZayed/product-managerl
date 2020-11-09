import React, {useState, useEffect} from "react"
import axios from "axios"

export default(props) => {
    const {successProcess , productId} = props;
    const deletePerson = e => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/products/"+ productId)
        .then(product=> console.log(product))
        successProcess(productId)
        // .catch(err=> console.log(err));
    }

    
    
    return(
        <div>
        <button onClick={deletePerson}>Delete</button>
        </div>
    )
}
