import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button';
import axios from 'axios';

const SeconPage = () => {
const [data , setData] = useState({})
   const {id} =useParams();
   const getData = async () => {
    
     const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
     setData(response.data)
   }
   getData();
  return (
    <>
    <div className='product-container'>
      <div className='product-main'>
        <div className='product-image'>
            <img src={data.image} alt="" className='product-img'/>
        </div>
        <div className='product-info'>
            <h1>
              {data.title}
            </h1>
            <h2 category="category">{data.category}</h2>
            <h3 className='price'>$ -{data.price}</h3>
            <p>
              {data.description}
            </p>
            <div className='button-wrapper' style={{marginTop:'3rem' , justifyContent: 'start' , paddingLeft : '0'}}>
             <Button classname='cart-btn m2' name={"Add to cart"} />
             <Button classname='buy-btn' name={"Buy now"}/>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default SeconPage