import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import { 
    CheckoutContainer,
    HeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    TestWarningContainer
} from './checkout.styles'

export const Checkout = ({ cartItems, total }) => (
    <CheckoutContainer>
        <HeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </HeaderContainer>
        {
            cartItems.map(cartItem => 
                (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )    
            )
        }
        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>
        <StripeButton price={total}/>
        <TestWarningContainer>
            *Please use the following test credit card for payments*
            <br/>
            <span> 4242 4242 4242 4242 </span>  
            <span>Exp: 07/20 -> current Date: MM/YY</span>
            <span> CVC: 123</span>
        </TestWarningContainer>
    </CheckoutContainer>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)