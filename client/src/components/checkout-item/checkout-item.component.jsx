import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action'


import {
    CheckoutItemContainer,
    ImageContainer,
    Image,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles'

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <CheckoutItemContainer>
        <ImageContainer>
          <Image src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
          <div onClick={() => removeItem(cartItem)}>&#10094;</div>
          <span>{quantity}</span>
          <div onClick={() => addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
          &#10006;
        </RemoveButtonContainer>
      </CheckoutItemContainer>
    )
}

const mapStateToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect (null, mapStateToProps) (CheckoutItem)