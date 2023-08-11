import React from 'react'
 import logo from "../assets/logo.avif"
const ImgPortion = ({src}) => {
  return (
    <div className='img-portion'>
        <img src={src} alt=""  className='img'/>
    </div>
  )
}

export default ImgPortion