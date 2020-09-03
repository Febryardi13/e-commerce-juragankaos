import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { CollectionItem } from './collection-item.component'
import { addItem } from '../../redux/cart/cart.action'

configure({ adapter: new Adapter })

describe('CollectionItem component', () => {
    let wrapper;
    let mockAddItem;
    const imageUrl = 'www.testImage.com';
    const mockName = 'black hat';
    const mockPrice = 10;

    beforeEach(() => {
        mockAddItem = jest.fn()

        const mockProps = {
            item: {
                name: mockName,
                imageUrl: imageUrl,
                price: mockPrice
            },

            addItem: mockAddItem
        }

        wrapper = shallow(<CollectionItem {...mockProps} />)
    })

    it('should render CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should call addItem when AddButton clicked', () => {
        wrapper.find('AddButton').simulate('click')
        expect(mockAddItem).toHaveBeenCalled()
    })

    it('should render imageUrl as a props on BackgroundImage', () => {
        expect(wrapper.find('CollectionImage').prop('imageUrl')).toBe(imageUrl)
    })

    it('should render name prop in CollectionName', () => {
        expect(wrapper.find('CollectionName').text()).toBe(mockName)
    })

    it('should render price props in CollectionPrice', () => {
        const getPrice = (wrapper.find('CollectionPrice').text()).replace('$', '')
        const price = parseInt(getPrice)
        expect(price).toBe(mockPrice)
    })
})