import React from 'react';
import { connect } from 'react-redux';

import { toogleHiddenCart } from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon  } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toogleCartHidden }) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> 0 </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleHiddenCart())
})

export default connect (null, mapDispatchToProps) (CartIcon);