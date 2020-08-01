import React from 'react'

import { 
    CartItemContainer, 
    ItemDetailsContainer,
    CartImage
} from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartImage src={imageUrl} alt={`item${name}`}/>
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>{quantity} x {price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;