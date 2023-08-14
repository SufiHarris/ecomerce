import React from 'react'
import ImgPortion from './ImgPortion'
import Button from './Button'
import {useNavigate} from 'react-router-dom';


const Card = ({data ,id ,number,setNumber}) => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate(`/productpage/${data.id}`);


  
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
             <Button 
              name = {"Add to cart"}
              classname={"cart-btn"} 
              number ={number} 
              setNumber ={setNumber}  
              onClick= {() =>
              setNumber(() => number ++)}/>
             <Button
              name = {"View item"}
              classname={"view-btn"} 
              onClick={handleOnClick}
              navigate={navigate} 
             />
        </div>
    </div>
  )
}

export default Card