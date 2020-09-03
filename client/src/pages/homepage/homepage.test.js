import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { HomePage } from './homepage.component'

configure({ adapter: new Adapter })

it('should render Homepage component', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot()
})