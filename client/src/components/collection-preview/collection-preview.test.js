import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { CollectionPreview } from './collection-preview.component'
configure({ adapter: new Adapter })

describe('CollectionPreview component', () => {
    let wrapper;
    let mockMatch;
    let mockHistory;
    const mockRouteName = 'hats';

    beforeEach(() => {
        mockMatch = {
            path: '/shop'
        }

        mockHistory = {
            push: jest.fn()
        }

        const mockProps = {
            match: mockMatch,
            history: mockHistory,
            routeName: mockRouteName,
            title: 'hats',
            items: []
        }

        wrapper = shallow(<CollectionPreview {...mockProps} />)
    })

    it('should render CollectionPreview compoenent', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should call history.push with the right string when TitleContainer clicked', () => {
        wrapper.find('TittleContainer').simulate('click')

        expect(mockHistory.push).toHaveBeenCalledWith(
            `${mockMatch.url}/${mockRouteName}`
        )
    })
})