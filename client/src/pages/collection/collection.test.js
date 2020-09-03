import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { CollectionPage } from './collection.component'
import CollectionItem from '../../components/collection-item/collection-item.component'

configure({ adapter: new Adapter })

describe('CollectionPage component', () => {
    let wrapper;
    let mockItems = [{id: 1}, {id: 2}, {id: 3}]

    beforeEach(() => {
        const mockCollection = {
            items: mockItems,
            title: 'Test'
        }

        wrapper = shallow(<CollectionPage collection={mockCollection} />)
    })

    it('should render the CollectionPage component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should render the same number of CollectionItems as collection array', () => {
        expect(wrapper.find(CollectionItem).length).toBe(mockItems.length)
    })
})
