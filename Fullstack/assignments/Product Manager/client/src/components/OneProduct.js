import React, {useEffect, useState} from 'react';
import axios from 'axios';




const OneProduct = (props)=>{

    const {id} = props;

    const [oneProduct, setOneProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err)=> console.log(err))
    },[])

    return(
        <div className='oneProduct-component'>
            <h2>{oneProduct.title}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
        </div>
    );
}

export default OneProduct;