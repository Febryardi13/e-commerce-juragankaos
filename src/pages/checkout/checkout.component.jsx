import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

const Checkout = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='heaader-block'>
                <span>Product</span>
            </div>
            <div className='heaader-block'>
                <span>Description</span>
            </div>
            <div className='heaader-block'>
                <span>Quantity</span>
            </div>
            <div className='heaader-block'>
                <span>Price</span>
            </div>
            <div className='heaader-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )    
            )
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <StripeButton price={total}/>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br/>
            <span> 4242 4242 4242 4242 </span>  
            <span>Exp: 07/20 -> current Date: MM/YY</span>
            <span> CVC: 123</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)