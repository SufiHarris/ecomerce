import React, { useState } from 'react'
import "./nav.css"
import logo from "../../assets/logo.avif"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Nav = ({number}) => {
   const [cart ,setCart ] =useState()
   useState(() => {
      const number = localStorage.getItem("number");
      setCart(number)
   },[number])


  return (
     <nav>
        <div className='logo-div'>
          <Link to= {'/'}>   <img src={logo} alt=""  className='logo'/></Link> 
        </div>
        <div className='cart-div'>
                     <input type="text" name="" id="" className='nav-search'  placeholder='Search for item'/>
         </div> 
        <div className='nav-links'>
           <ul>
    <li><Link to={'/'}>Home</Link></li>
    <li>Contact</li>
    <li>Products</li>
    <li>Shop</li>
    <li>Contact</li>
    
    <li className='cart'><FaShoppingCart /></li>
    <li className='number' >{number}</li>
         </ul>
        </div>
     
     </nav>
  )
}

export default Nav