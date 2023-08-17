import React, { useEffect, useState } from 'react'
import "./nav.css"
import logo from "../../assets/logo.avif"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchItem from '../SearchItem';
const Nav = ({number, search ,setSearch}) => {

  return (
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
    <li className='number' >{number}</li>
         </ul>
        </div>
     
     </nav>
  )
}

export default Nav