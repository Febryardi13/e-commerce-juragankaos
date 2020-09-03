import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import UserActionTypes from './user.types'
import userReducer from './user.reducer'

configure({ adapter: new Adapter })

const initialState = {
    currentUser: null,
    error: null
}

describe('userReducer', () => {
    it('should return initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState)
    })

    it('should set currentUser to payload on signInSuccess action', () => {
        const mockUser = {
            id: 1,
            displayName: 'Febry'
        }

        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_IN_SUCCESS,
                payload: mockUser
            }).currentUser
        ).toEqual(mockUser)
    })

    it('should set currentUser to null on signOutSuccess action', () => {
        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_OUT_SUCCESS,
            }).currentUser
        ).toBe(null)
    })

    it('should set errorMessage to payload to signInFailure, signUpFailure, signOutFailure action', () => {
        const mockError = {
            message: 'errored',
            code: '404'
        }

        expect(userReducer(initialState, {
                type: UserActionTypes.SIGN_IN_FAILURE,
                payload: mockError
            }).error
        ).toBe(mockError)
        
        expect(userReducer(initialState, {
                type: UserActionTypes.SIGN_UP_FAILURE,
                payload: mockError
            }).error
        ).toBe(mockError)
        
        expect(userReducer(initialState, {
                type: UserActionTypes.SIGN_OUT_FAILURE,
                payload: mockError
            }).error
        ).toBe(mockError)
    })
})