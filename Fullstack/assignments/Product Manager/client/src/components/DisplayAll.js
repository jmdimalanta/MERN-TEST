import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';




const DisplayAll = (props)=>{
    const {productList, setProductList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err)=> console.log(err))

    }, [])

    const deleteFilter = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductList(productList.filter((product, index)=> product._id !== idFromBelow))
            })
            .catch((err)=> console.log(err))
    }

    return(
        <div>
            <header>All of the Products!</header>
            {
                productList.map((product, index)=>(
                    <div key={product._id}>
                        <Link to ={`/products/${product._id}`}>{product.title}</Link>
                        <button onClick={()=> navigate(`/products/edit/${product._id}`)}>Edit</button>
                        <button onClick={()=> deleteFilter(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayAll;