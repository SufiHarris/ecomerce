import React, { useEffect, useState } from 'react'
import Card from '../components/card'

const CardPage = ({ data , onClick}) => {
  
  return (
    <div className='card-container'>
      {data.length <= 0 &&  <h1>No Matching resulst</h1>}
      {data.map((data) =>{ return  <Card data={data} key = {data.id} onClick={onClick}/>}) }
    </div>
  )
}

export default CardPage