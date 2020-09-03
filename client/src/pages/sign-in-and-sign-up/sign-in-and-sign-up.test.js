import React from 'react'
import { shallow, configure }  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { SignInAndSignUp } from './sign-in-and-sign-up.component'

configure({ adapter: new Adapter })

it('should render SignInAndSignUpPage component', () => {
    expect(shallow(<SignInAndSignUp/>)).toMatchSnapshot()
})
