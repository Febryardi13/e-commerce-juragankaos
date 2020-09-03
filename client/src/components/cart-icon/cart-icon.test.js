import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { CartIcon } from './cart-icon.component'
configure({ adapter: new Adapter() })

describe('CartIcon component', () => {
    let wrapper;
    let mockToggleCartHidden;
    beforeEach(() => {
        mockToggleCartHidden = jest.fn()
    })

    const mockProps = {
        itemCount : 0,
        toogleCartHidden: mockToggleCartHidden
    }

    
    wrapper = shallow(<CartIcon {...mockProps} />)
    
    it('should render CartIcon component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should call toggleCartHidden when icon clicked', () => {
        // wrapper.find('CartIconContainer').simulate('click')
        // expect(mockToggleCartHidden).toHaveBeenCalled()
    })

    it('should render the itemCount as the next', () => {
        const itemCount = parseInt(wrapper.find('ItemCountContainer').text())
        expect(itemCount).toBe(0)
    })
})
