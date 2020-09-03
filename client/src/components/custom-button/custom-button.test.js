import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { CustomButton } from './custom-button.component'

configure({ adapter: new Adapter })

it('should render CustomButton component', () => {
    expect(shallow(<CustomButton/>)).toMatchSnapshot()
})