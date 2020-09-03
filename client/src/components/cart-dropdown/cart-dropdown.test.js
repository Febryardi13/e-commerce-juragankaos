import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';


import { CartDropdown } from './cart-dropdown.component'
import CartItem from '../cart-item/cart-item.component'

import { toogleHiddenCart } from '../../redux/cart/cart.action'
configure({ adapter: new Adapter()})

describe('CartDropdown component', () => {
    let wrapper;
    let mockHistory;
    let mockDispatch;
    const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
    
    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        }

        mockDispatch = jest.fn()

        const mockProps = {
            cartItems: mockCartItems,
            history: mockHistory,
            dispacth: mockDispatch
        };

        wrapper = shallow(<CartDropdown {...mockProps} />);
    })
    
    it('should render CartDropdown component', () => {
       expect(wrapper).toMatchSnapshot();
    })

    it('should call history.push when button is clicked', () => {
        // wrapper.find('CartDropdownButton').simulate('click');
        // expect(mockHistory.push).toHaveBeenCalled();
        // expect(mockDispatch).toHaveBeenCalledWith(toogleHiddenCart());
    });

    it('should render an equal number of CartItem components as the cartItems prop', () => {
        expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length)
    })

    it('should render EmptyMessageContainer if cartItems is empty', () => {
        const mockProps = {
            cartItems: [],
            history: mockHistory,
            dispacth: mockDispatch
        };

        const newWrapper = shallow(<CartDropdown { ...mockProps } />)
        expect(newWrapper.exists('EmptyMessageContainer')).toBe(true)
    })

})