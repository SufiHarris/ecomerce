import React from 'react'
import {useNavigate} from 'react-router-dom';
const Button = (
  {name ,
   classname ,
   onClick ,
   number ,
   setNumber ,
   navigate ,
   }) => {
  return (
   <>
   <button 
    className={classname}
    onClick={onClick}
    >
    {name}
    </button>
   </>
  )
}

export default Button