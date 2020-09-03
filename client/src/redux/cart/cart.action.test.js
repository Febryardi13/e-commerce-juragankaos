import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CartActionTypes from './cart.types'
import {
    toogleHiddenCart,
    addItem,
    removeItem,
    clearItemFromCart,
    clearCart
} from './cart.action'

configure({ adapter: new Adapter })

describe('toggleCartHidden action', () => {
    it('should create the toggleHidden action', () => {
        expect(toogleHiddenCart().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN)
    })
})

describe('addItem action', () => {
    it('should create the addItem action', () => {
        const mockItem = {
            id: 1
        }

        const action = addItem(mockItem)
        expect(action.type).toEqual(CartActionTypes.ADD_ITEM)
        expect(action.payload).toEqual(mockItem)
    })
})

describe('removeItem action', () => {
    it('should create the removeItem action', () => {
        const mockItem = {
            id: 1
        }

        const action = removeItem(mockItem)
        expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM)
        expect(action.payload).toEqual(mockItem)
    })
})

describe('clearItemFromcart action', () => {
    it('should create the clearItemFromCart', () => {
        const mockItem = {
            id: 1
        }

        const action = clearItemFromCart(mockItem)
        expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART)
        expect(action.payload).toEqual(mockItem)
    })
})

describe('clearCart action', () => {
    it('should create the clearCart', () => {
        expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART)
    })
})



