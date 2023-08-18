import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import { useOutletContext } from 'react-router-dom'
import LoadingSpinner from "../components/Spinner"
const Home = ({ }) => {
  const [data , isLoading ,onClick] =useOutletContext();
  if(isLoading)  return <div className='spinner-container'><LoadingSpinner /></div>
  return (
    <div className='card-container'>
      {data.length <= 0 &&  <h1>No Matching resulst</h1>}
      {data.map((data) =>{ return  <Card data={data} key = {data.id} onClick={onClick}/>}) }
    </div>
  )
}

export default Home