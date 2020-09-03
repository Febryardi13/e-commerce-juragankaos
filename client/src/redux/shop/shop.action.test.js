import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ShopActionTypes from './shop.types'
import {
    fetchCollectionsStart, fetchCollectionsSuccess, fetchCollectionsFailure, fetchCollectionsStartAsync
} from './shop.actions'

configure({ adapter: new Adapter })

describe('fetchCollectionStart action', () => {
    it('should create the fetchCollectionStart action', () => {
        expect(fetchCollectionsStart().type).toEqual(
            ShopActionTypes.FETCH_COLLECTIONS_START
        )
    })
})

describe('fetchCollectionSuccess action', () => {
    it('should create the fetchCollectionSuccess success', () => {
        const mockCollectionsMap = {
            hats: {
                id: 1
            }
        }

        const action = fetchCollectionsSuccess(mockCollectionsMap)
        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS)
        expect(action.payload).toEqual(mockCollectionsMap)
    })
})

describe('fetchCollectionsFailure action', () => {
    it('should create the fetchCollectionsFailure action', () => {
        const action = fetchCollectionsFailure('errored')

        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE)
        expect(action.payload).toEqual('errored')
    })
})

describe('fetchCollectionsStartAsync action', () => {
    it('should create the fetchCollectionsStartAsync action', () => {
        const mockActionCreator = fetchCollectionsStartAsync()
        const mockDispatch = jest.fn()
        mockActionCreator(mockDispatch)

        expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart())
    })
})



