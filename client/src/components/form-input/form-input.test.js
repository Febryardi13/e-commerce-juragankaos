import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { FormInput } from './form-input.component'
import { FormInputLabel } from './form-input.styles'

configure({ adapter: new Adapter })

describe('FormInput component', () => {
    let wrapper;
    let mockHandleChange;

    beforeEach(() => {
        mockHandleChange = jest.fn()

        const mockProps = {
            label: 'email',
            value: 'test@gmail.com',
            handleChange: mockHandleChange
        }

        wrapper = (shallow(<FormInput {...mockProps} />))
    })

    it('should render FormInput component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should call handleChange method when input changes', () => {
        wrapper.find('FormInputContainer').simulate('change')
        expect(mockHandleChange).toHaveBeenCalled()
    })

    it('should render FormInputLabel if there is no label', () => {
        const mockNewProps = {
            label: '',
            value: 'test@gmail.com',
            handleChange: mockHandleChange
        }

        const newWrapper = shallow(<FormInput {...mockNewProps} />)
        
        expect(newWrapper.exists(FormInputLabel)).toBe(false)
    })
})