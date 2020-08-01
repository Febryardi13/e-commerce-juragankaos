import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { toogleHiddenCart } from '../../redux/cart/cart.action';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { 
    CartIconContainer, 
    ItemCountContainer,
    ShoppingIconContainer    
} from './cart-icon.styles'

const CartIcon = ({ toogleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toogleCartHidden}>
        <ShoppingIconContainer/>
        <ItemCountContainer> 
            { itemCount } 
        </ItemCountContainer>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleHiddenCart())
})

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect (mapStateToProps, mapDispatchToProps) (CartIcon);