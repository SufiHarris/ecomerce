import React, { useState } from 'react'
import "./nav.css"
import logo from "../../assets/logo.avif"
import { FaShoppingCart } from 'react-icons/fa';
const Nav = ({number}) => {
   const [cart ,setCart ] =useState()
   useState(() => {
      const number = localStorage.getItem("number");
      setCart(number)
   },[number])


  return (
     <nav>
        <div className='logo-div'>
              <img src={logo} alt=""  className='logo'/>
        </div>
        <div className='cart-div'>
                     <input type="text" name="" id="" className='nav-search'  placeholder='Search for item'/>
         </div> 
        <div className='nav-links'>
           <ul>
    <li>Home</li>
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