import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { WithSpinner } from './with-spinner.component'
import { Spinner } from '../spinner/spinner.component'

configure({ adapter : new Adapter })

describe('WithSpinner HOC', () => {
    const TestComponent = () => <div className='test' />
    const WrappedComponent = WithSpinner(TestComponent)

    describe('if loading is true', () => {
        it('should render Spinner component', () => {
            const wrapper = shallow(<WrappedComponent isLoading={true} />)
            expect(wrapper.exists(Spinner)).toBe(true)
        })

        it('should not render component', () => {
            const wrapper = shallow(<WrappedComponent isLoading={true} />)
            expect(wrapper.exists(TestComponent)).toBe(false)
        })
    })

    describe('if loading is false', () => {
        it('should render component', () => {
            const wrapper = shallow(<WrappedComponent isLoading={false} />)
            expect(wrapper.exists(TestComponent)).toBe(true)
        })

        it('should not render Spinner', () => {
            const wrapper = shallow(<WrappedComponent isLoading={false} />)
            expect(wrapper.exists(Spinner)).toBe(false)
        })
    })
    
})