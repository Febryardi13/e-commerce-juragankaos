import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Checkout } from './checkout.component'

configure({ adapter: new Adapter })

describe('Checkout component', () => {
    let wrapper;
    
    beforeEach(() => {
        const mockProps  ={
            cartItems: [],
            total: 100
        }
    
        wrapper = shallow(<Checkout {...mockProps} />)
    })
    
    it('should render Checkout component', () => {
        expect(wrapper).toMatchSnapshot()
    })
})

