import React, {useState} from 'react';
import axios from 'axios';
import CreateProduct from '../components/CreateProduct';
import DisplayAll from '../components/DisplayAll';



const Main = (props)=>{

    const [productList, setProductList] = useState([]);


    return(
        <div>
            <CreateProduct productList = {productList} setProductList = {setProductList}/>
            <hr/>
            <DisplayAll productList = {productList} setProductList = {setProductList}/>
        </div>
    );
}

export default Main;