import React, { useEffect, useState } from 'react'
import "./nav.css"
import logo from "../../assets/logo.avif"
import { FaShoppingCart } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import SearchItem from '../SearchItem';
import axios from 'axios';

const Nav = ({}) => {
   const [data ,setData] = useState([]);
   const [isLoading ,setLoading ] = useState(false);
   const [search ,setSearch] = useState("");
   const [quantity ,setQuantity] = useState(localStorage.getItem("number") ? parseInt(localStorage.getItem("number")) : 0);
   function onClick () {
      setQuantity((quantity) => quantity + 1);
      console.log('hii');
    }
    const handleChange = () => {
      if(search == "") {
         return(
         setLoading(true),
          getProducts()
         )
      }
      setData((data) => data.filter((data) => data.title.toLowerCase().includes(search.toLowerCase())))
    }
    async function getProducts  () {
      try{
            const response = await axios.get("https://fakestoreapi.com/products" );
            const data = response.data;
            setData(data);
            setLoading(false);
      }catch (err){
       console.log(err);
      }
   }
   useEffect (() => {
     const setLocalNumber = () => {
           localStorage.setItem("number" ,quantity);
     }
     setLocalNumber();
   } ,[quantity]);
   useEffect(() => {
      setLoading(true);
      getProducts();
 },[]);

 useEffect (() => {
   handleChange();
 },[search])
  return (
   <>
     <nav>
        <div className='logo-div'>
          <Link to= {'/'}>   <img src={logo} alt=""  className='logo'/></Link> 
        </div>
        <div className='cart-div'>
                   <SearchItem search={search} setSearch={setSearch}/>
        </div> 
        <div className='nav-links'>
           <ul className='ul-nav'>
        <li><Link to={'/'}>Home</Link></li>
        <li>Contact</li>
        <li>Products</li>
        <li>Shop</li>
        <li>Contact</li>
    
    <li className='cart'><FaShoppingCart /></li>
    <li className='number' >{quantity}</li>
         </ul>
        </div>
     
     </nav>
     <Outlet context={[data , isLoading , onClick]}/>
     </>
  )
}

export default Nav