import React from 'react'

import { SignUpAndSignInContainer } from './sign-in-and-sign-up.styles'

import SignIn from '../../components/sign-in/sign-in.component'
import SignOut from '../../components/sign-up/sign-up.component'

export const SignInAndSignUp = () => (
    <SignUpAndSignInContainer>
        <SignIn/>
        <SignOut/>
    </SignUpAndSignInContainer>
)

export default SignInAndSignUp