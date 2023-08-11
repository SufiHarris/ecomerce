import React from 'react'
import ImgPortion from './ImgPortion'
import Button from './Button'

const Card = ({data ,id ,number,setNumber}) => {
  const handleClick = () => {
console.log("hello");
  }

  return (
    <div className='card'>
        <ImgPortion src ={data.image}/>
        <div>
          <ul className='body-data'>
             <li className='body-li title'>{data.title}</li>
             <li className='body-li price'> $ - {data.price}</li>
             <li className='body-li category'>{data.category}</li>
             <li className='body-li'>{data.description.slice(0,100)}</li>
          </ul>
        </div>
        <div className='button-wrapper'>
             <Button name = {"Add to cart"} classname={"cart-btn"} number ={number} setNumber ={setNumber}  onClick= {() => setNumber(() => number ++)}></Button >
             <Button name = {"View item"} classname={"view-btn"}  ></Button>
        </div>
    </div>
  )
}

export default Card