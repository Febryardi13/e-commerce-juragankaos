import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { MenuItem } from './menu-item.component'

configure({ adapter: new Adapter })

describe('MenuItem component', () => {
    let wrapper;
    let mockMatch;
    let mockHistory;
    const linkUrl = '/hats';
    const size = 'large';
    const imageUrl = 'testimage';

    beforeEach(() => {
        mockMatch = {
            url: '/shop'
        }

        mockHistory = {
            push: jest.fn()
        }

        const mockProps = {
            match: mockMatch,
            history: mockHistory,
            linkUrl,
            size,
            title: 'hats',
            imageUrl
        }

        wrapper = shallow(<MenuItem {...mockProps} />)
    })

    it('should render MenuItem component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should call history.push with the right string when MenuItemOContainer clicked', () => {
        wrapper.find('MenuItemContainer').simulate('click')
        expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`)
    })

    it('should pass size to MenuItemContainer as the props size', () => {
        expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size)
    })

    it('should pass imageUrl to BackgroundImageContainer as the props imageUrl', () => {
        expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(imageUrl)
    })
})
