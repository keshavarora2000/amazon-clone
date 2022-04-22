import React from 'react'

import './SingleProduct.css'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { products } from '../../utils/ProductsData'
import { addToBasket } from '../../redux/actions';

const SingleProduct = () => {
  let { id } = useParams();
  let singleProduct = products.find((item) => item.id === id);
  let dispatch = useDispatch();  

  const addItemToBasket = () => {
    const item = ({
        id: singleProduct.id,
        title: singleProduct.title,
        image: singleProduct.image,
        price: singleProduct.price,
        rating: singleProduct.rating,
        specification: singleProduct.specification,
        detail: singleProduct.detail
    });
    dispatch(addToBasket(item));
  }  

  return (
    <div className='single-products-container'>
        <img 
            className='single-product-ad'
            src=""
            alt=""
        />
        <div>
            <div className='single-product'>
                <img 
                    src={singleProduct.image}
                    className='single-product-image'
                    alt=""
                />
                <div className='single-product-info'>
                    <div className='single-product-title'>{singleProduct.title}</div>
                    <div className='single-product-rating'>
                        {Array(singleProduct.rating)
                            .fill()
                            .map((_,index) => (
                                <p key={index}></p>
                            ))}
                    </div>
                    <p className='single-product-price'>
                        Price <strong>Rs. </strong>
                        <strong>{singleProduct.price}</strong>        
                    </p>
                    <div className='single-product-specification'>
                        <h4>Specification</h4>
                        {singleProduct.specification && singleProduct.specification.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}        
                    </div>
                    <div className='single-product-description'>
                        <h4>Product Description</h4>
                        <p>{singleProduct.detail}</p>    
                    </div>
                    <button onClick={addItemToBasket}>
                        <i>
                            <ShoppingCartOutlined />
                        </i>    
                        Add To Basket
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct