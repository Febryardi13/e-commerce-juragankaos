import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Header } from './header.component'
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component'

configure({ adapter: new Adapter })

describe('Header component', () => {
    let wrapper;
    let mockSignOutStart;

    beforeEach(() => {
        mockSignOutStart = jest.fn()

        const mockProps = {
            hidden: true,
            currentUser: {
                uid: '123'
            },
            signOutStart: mockSignOutStart
        }

        wrapper = shallow(<Header {...mockProps} />)
    })

    it('should render Header component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    describe('if currentUser is present', () => {
        it('should render signOut link', () => {
            expect(wrapper.find('OptionLink').at(2).text()).toBe('SIGN OUT')
        })

        it('should call signOutStart method when link is clicked', () => {
            wrapper.find('OptionLink').at(2).simulate('click')
            expect(mockSignOutStart).toHaveBeenCalled()
        })
    })

    describe('if current user is null', () => {
        it('should render sign in link', () => {
            const mockProps = {
                hidden: true,
                currentUser: null,
                signOutStart: mockSignOutStart
            }

            const newWrapper = shallow(<Header {...mockProps} />)
            expect(newWrapper.find('OptionLink').at(2).text()).toBe('SIGN IN')
        })
    })
    
    describe('if hidden is true', () => {
        it('should not render CartDropDown', () => {
            expect(wrapper.exists(CartDropdown)).toBe(false)
        })
    })
    
    describe('if currentUser is null', () => {
        it('should render CartDropdown', () => {
            const mockProps = {
                hidden: false,
                currentUser: null,
                signOutStart: mockSignOutStart
            }

            const newWrapper = shallow(<Header {...mockProps} />)
            expect(newWrapper.exists(CartDropdown)).toBe(false)
        })
    }) 
})