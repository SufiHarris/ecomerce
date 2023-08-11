import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import axios from 'axios'

const CardPage = ({number ,setNumber}) => {
  
 const [data ,setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products" );
        const data = response.data;
        setData(data);
        }
        getData();
    },[])
  return (
    <div className='card-container'>
      {data.map((data) =>{ return  <Card data={data} key = {data.id} number ={number} setNumber ={setNumber}/>}) }
    </div>
  )
}

export default CardPage