import React from 'react'

const Button = ({name , classname , onClick ,number ,setNumber}) => {
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