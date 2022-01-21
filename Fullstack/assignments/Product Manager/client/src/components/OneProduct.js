import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';




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

    const deleteHandler = ()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=> console.log(err))
    }


    return(
        <div className='oneProduct-component'>
            <h2>{oneProduct.title}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default OneProduct;