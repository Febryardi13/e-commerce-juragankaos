import React from 'react'

import './sign-in-and-sign-up.style.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignOut from '../../components/sign-up/sign-up.component'

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignOut/>
    </div>
)

export default SignInAndSignUp