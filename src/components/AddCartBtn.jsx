import React from 'react'
import { useOutletContext } from 'react-router-dom'
const Button = ({}) => {
    const [onClick] = useOutletContext();
  return (
   <>
   <button 
    className={"cart-btn"}
    onClick={onClick}
    >
    Add to cart
    </button>
   </>
  )
}

export default Button