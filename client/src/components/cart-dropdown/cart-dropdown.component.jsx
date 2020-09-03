import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toogleHiddenCart } from '../../redux/cart/cart.action'

import {
    CartDropdownContainer,
    CartItemsContainer,
    CartDropdownButton,
    EmptyMessageContainer
} from './cart-dropdown.styles'

export const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? 
                cartItems.map(cartItems => (
                    <CartItem key={cartItems.id} item={cartItems} />
                ))
                :
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => { 
                history.push('/checkout'); 
                dispatch(toogleHiddenCart())
            }}
        > GO TO CHECKOUT 
        </CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps) (CartDropdown));