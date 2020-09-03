import { takeLatest, put, take } from 'redux-saga/effects'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.action'
import { clearCartOnSignOut, onSignOutSuccess } from './cart.sagas'

configure({ adapter: new Adapter })

describe('on signOut success Saga', () => {
    it('should trigger on SIGN_OUT_SUCCESS', async () => {
        const generator = onSignOutSuccess()
        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
        )
    })
})

describe('clear cart on signout saga', () => {
    it('should fire clearCart', () => {
        const generator = clearCartOnSignOut()
        expect(generator.next().value).toEqual(put(clearCart()))
    })
})

