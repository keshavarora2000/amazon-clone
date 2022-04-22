import React from 'react'

import './Product.css'

import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../redux/actions'

const Product = ({ id, title, image, price, rating, specification, detail}) => {
  const dispatch = useDispatch();

  const onAddItemToBasket = () => {
    const item = ({
        id,
        title,
        image,
        price,
        rating,
        specification,
        detail
    });
    dispatch(addToBasket(item));
  }
  

  return (
    <div className='product'>
        <div className='info'>
            <Link to={`/products/${id}`} className='title'>
                <p>{title}</p>
            </Link>
            <p className='price'>
                <strong>Rs. </strong>
                <strong>{price}</strong>
            </p>
            <div className='rating'>
                {
                 Array(rating)
                    .fill()
                    .map((_, index) => (
                        <p key={index}><span role="img" aria-label="start">⭐</span></p>
                    ))
                }
            </div>
        </div>
        <img className='product-image' src={image} alt='product' />
        <button onClick={onAddItemToBasket}>
            <i>
                <ShoppingCartOutlinedIcon />
            </i>
            Add To Basket
        </button>
    </div>
  )
}

export default Product