import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { takeLatest, put, call } from 'redux-saga/effects'

import {
    firestore,
    convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils'

import {
    fetchCollectionsSuccess, 
    fetchCollectionsFailure
} from './shop.actions'
import ShopActionType from './shop.types'
import { fetchCollectionsAsync, fetchCollectionsStart } from './shop.sagas'
import ShopActionTypes from './shop.types'

configure({ adapter: new Adapter })

describe('fetch collections start saga', () => {
    it('should trigger on FETCH_COLLECTIONS_START', () => {
        const generator = fetchCollectionsStart()
        expect(generator.next().value).toEqual(
            takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
        )
    })
})

describe('fetch collections async saga', () => {
    const generator = fetchCollectionsAsync()

    it('should call firestore collection', () => {
        const getCollection = jest.spyOn(firestore, 'collection')
        generator.next()
        expect(getCollection).toHaveBeenCalled()
    })

    it('should call convertCollectionsSnapshot saga', () => {
        const mockSnapshot = {}
        expect(generator.next(mockSnapshot).value).toEqual(
            call(convertCollectionsSnapshotToMap, mockSnapshot)
        )
    })

    it('should fire fetchCollectionsSuccess if collectionMap is successful', () => {
        const mockCollectionsMap = {
            hats: { id: 1 }
        }

        expect(generator.next(mockCollectionsMap).value).toEqual(
            put(fetchCollectionsSuccess(mockCollectionsMap))
        )
    })

    it('should fire fetchCollectionsMap if get collection fails at any point', () => {
        const newGenerator = fetchCollectionsAsync()
        newGenerator.next()
        expect(newGenerator.throw({ message: 'error' }).value).toEqual(
            put(fetchCollectionsFailure('error'))
        )
    })
})

