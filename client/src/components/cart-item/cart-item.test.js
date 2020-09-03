import React from 'react'
import { shallow, configure } from 'enzyme'
import CartItem from './cart-item.component'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter })

it('should render CartItem component', () => {
    const mockItem = {
        imageUrl: 'www.testImage.com',
        price: 10,
        name: 'hats',
        quantity: 2
    }

    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot()
})
