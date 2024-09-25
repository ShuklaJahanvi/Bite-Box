import React, { useContext } from 'react'
import './PlaceOrder.css' 
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

 const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="card-total">
          <h2>Cart Totals</h2>
          <div>
            <div className='card-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${2}</p>
            </div>
            <hr />
         <div className="cart-total-details">
         <b>Total</b>
         <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      
    </div>
  )
  
}

export default PlaceOrder
