import React from 'react'
import { shallow, configure } from 'enzyme'
import Adpater from 'enzyme-adapter-react-16'

import { CheckoutItem } from './checkout-item.component'

configure({ adapter: new Adpater })

describe('CheckoutItem component', () => {
    let wrapper;
    let mockClearItem;
    let mockAddItem;
    let mockRemoveItem;

    beforeEach(() => {
        mockClearItem = jest.fn();
        mockAddItem = jest.fn();
        mockRemoveItem = jest.fn();

        const mockProps = {
            cartItem: {
                imageUrl: 'www.testImage.com',
                price: 10,
                name: 'hats',
                quantity: 2
            },
            clearItem: mockClearItem,
            addItem: mockAddItem,
            removeItem: mockRemoveItem
        }

        wrapper = shallow(<CheckoutItem {...mockProps} />)
    })

    it('should render CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should call clearItem when remove button is clicked', () => {
        wrapper.find('RemoveButtonContainer').simulate('click')
    })

    it('should call removeItem when left arrow is clicked', () => {
        wrapper
          .find('QuantityContainer')
          .childAt(0)
          .simulate('click');
    
        expect(mockRemoveItem).toHaveBeenCalled();
    });

    it('should call addItem when rigth arrow is clicked', () => {
        wrapper
        .find('QuantityContainer')
        .childAt(2)
        .simulate('click')

        expect(mockAddItem).toHaveBeenCalled()
    })

})

