import React from 'react'
import { useSelector } from 'react-redux'
import './Checkout.css'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'
import SubTotal from '../../components/SubTotal/SubTotal'

const Checkout = () => {
  const { basket, user } = useSelector((state) => state.data);

  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img 
                className='checkout-ad'
                src=""
                alt=""
            />
            <div>
                <h3>Hello, {user? user.email: "Guest"}</h3>
                <h2 className='checkout-title'>
                    {
                     basket.length === 0 
                     ? "Your Shopping Basket is Empty"
                     : "Your Shopping Basket"
                    }
                </h2>
                {/* Checkout Product */}
                {basket && basket.map((item) => (
                    <CheckoutProduct 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                )) }
            </div>
        </div>
        <div className='checkout-right'>
            {/* Sub Total */}
            <SubTotal />
        </div>
    </div>
  )
}

export default Checkout