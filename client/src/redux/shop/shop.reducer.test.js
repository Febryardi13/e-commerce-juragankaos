import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ShopActionTypes from './shop.types'
import shopReducer from './shop.reducer'

configure({ adapter: new Adapter })

const initalState = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

describe('shopReducer', () => {
    it('should return initial state', () => {
        expect(shopReducer(undefined, {})).toEqual(initalState)
    })

    it('should set isFetching to true if fetchingCollectionsStart action', () => {
        expect(
            shopReducer(initalState, {
                type: ShopActionTypes.FETCH_COLLECTIONS_START
            }).isFetching
        ).toBe(true)
    })

    it('should set isFetching to false and collections to payload if fethingCollectionsSuccess', () =>{
        const mockItems = [{ id: 1 }, { id: 2 }]
        expect(
            shopReducer(initalState, {
                type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
                payload: mockItems
            })
        ).toEqual({
            ...initalState,
            isFetching: false,
            collections: mockItems
        })
    })

    it('should set isFetchng to false and errorMessage to payload if fetchingCollectionsFailure', () => {
        expect(
            shopReducer(initalState, {
                type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
                payload: 'error'
            })
        ).toEqual({
            ...initalState,
            isFetching: false,
            errorMessage: 'error'
        })
    })
})
