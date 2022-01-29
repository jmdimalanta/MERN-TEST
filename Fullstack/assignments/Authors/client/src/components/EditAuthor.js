import React, {useState, useEffect} from "react";
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const EditAuthor = (props)=>{
    const [errors, setErrors] = useState({});
    const [authorName, setAuthorName] = useState("");
    const {id} = props;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log(res.data);
            setAuthorName(res.data.authorName);
        })
        .catch((err)=>{
            console.log(err);
            navigate('/error');
        })
    }, [id])

    const updateSubmitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {authorName}
        )
        .then((res)=>{
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }


    return(
        <div>
            <header>
                <h1>Favorite Authors</h1>
                <Link to={'/'}>Home</Link>
            </header>

            <h2>Edit this Author</h2>

            <form onSubmit={updateSubmitHandler}>
                <label>Name:</label>
                <input onChange={(e)=> setAuthorName(e.target.value)}
                type='text'
                name='authorName'
                value={authorName}
                />
                {errors.authorName ? <span>{errors.authorName.message}</span> : null}

                <button>Submit</button>
                <button onClick={(e) => navigate('/')}>Cancel</button>
            </form>
        </div>
    )

}


export default EditAuthor;