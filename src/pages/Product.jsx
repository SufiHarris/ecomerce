import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Button from '../components/Button';
import axios from 'axios';
import LoadingSpinner from '../components/Spinner';

import { FaBold } from 'react-icons/fa';

const Product = ({ }) => {
const [data , setData] = useState({})
const [rating , setRating] = useState({})
const [isLoading ,setLoading ] = useState(false);
const [onClick ,] = useOutletContext();
console.log(useOutletContext())
const {id} =useParams();

   useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setData(response.data);
      setRating(response.data.rating)
      setLoading(false);
    }
    getData();
   } ,[])


  return (
    <>
 
    <div className='product-container'>
    {isLoading ?
         <LoadingSpinner /> : 
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
            <h5>
             Rating :{rating.rate} ({rating.count})
            </h5>
            <div className='button-wrapper' style={{marginTop:'3rem' , justifyContent: 'start' , paddingLeft : '0'}}>
             <Button classname='cart-btn m2' name={"Add to cart"} onClick={onClick}/>
             <Button classname='buy-btn' name={"Buy now"}/>
            </div>
        </div>
        </div>
        }
    </div> 

    </>
  )
}

export default Product