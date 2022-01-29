import React, {useState, useEffect} from "react";
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const AllAuthors = (props)=>{

    const [authorList, setAuthorList] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

    const deleteHandler = (idFromBelow) =>{
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res)=>{
                console.log(res.data);
                setAuthorList(authorList.filter((author)=> author._id !== idFromBelow))
            })
            .catch((err)=>{
                console.log(err);
            })
    }




    return(
        <div>
            <header>
                <h1>Favorite Authors</h1>
                <Link to={'/new'}>Add a new Author</Link>
            </header>
            <table style={{margin:'auto', border:'2px solid black'}}>
                <thead style={{backgroundColor:'grey', color:'white'}}>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList?
                        authorList.map((author, index)=>(
                            <tr key={index}>
                                <td>{author.authorName}</td>
                                <td>
                                    <button onClick={()=>{navigate(`/edit/${author._id}`)}}>Edit</button>
                                    <button onClick={()=>deleteHandler(author._id)}>Delete</button>

                                </td>
                            </tr>
                        ))
                        :null
                    }
                </tbody>

            </table>
        </div>
    )
}


export default AllAuthors;