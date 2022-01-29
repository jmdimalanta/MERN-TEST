import React from "react";
import {Link} from '@reach/router';


const Error = (props)=>{




    return(
        <div>
            <p>We're sorry, but we couldn't find the author you were looking for. Would you like to add an author to our database?</p>
            <Link to={'/new'}>Add an Author</Link>
        </div>
    )
}


export default Error;