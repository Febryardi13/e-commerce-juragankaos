import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { combineReducers, createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { ShopPage } from './shop.component'

configure({ adapter: new Adapter })

export const createMockStore = ({ state, reducers }) => {
    const store = createStore(combineReducers(reducers), state)
    return {
        ...store,
        persistor: {
            persist: () => null
        }
    }
}

describe('ShopPage component', () => {
    let wrapper;
    let mockFetchCollectionsStart;
    let store;

    beforeEach(() => {
        const mockReducer = (
            state = {
                isFetching: true
            },
            action
        ) => state;

        const mockState = {
            shop: {
                isFetching: true
            }
        }

        mockFetchCollectionsStart = jest.fn()

        store = createMockStore({
            state: mockState,
            reducers: { shop: mockReducer }
        })

        const mockMatch = {
            path: ''
        }

        const mockProps = {
            match: mockMatch,
            fetchCollectionsStart : mockFetchCollectionsStart
        }

        wrapper = mount(
            <BrowserRouter>
                <Provider store={store}>
                    <ShopPage {...mockProps} />
                </Provider>
            </BrowserRouter>
        )
    })

    it('should render ShopPage component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should render ShopPage component', () => {
        expect(mockFetchCollectionsStart).toHaveBeenCalled()
    })
})


