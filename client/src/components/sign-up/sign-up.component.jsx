import React, { useState } from 'react'

import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/user.action'

import { 
    SignUpContainer,
    TitleContainer,
    ButtonsContainer
} from './sign-up.styles'


const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState ({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })   

    const {displayName, email, password, confirmPassword} = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();

        if(password.length <= 7 || confirmPassword.length <= 7) {
            alert('Password must be 8 character or more')
            if(password !== confirmPassword ) {
                alert('Password not matching with Confirm Password')
                return
            }                
        }
        
        signUpStart({ email, password, displayName })
    }

    const handleChange = event => {
        const { name, value } = event.target
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <SignUpContainer>
            <TitleContainer>
                I don't have a account
            </TitleContainer>
            <span>
                Sign up with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='display name'
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='email'
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='confirm password'
                />
                <ButtonsContainer>
                    <CustomButton type='submit' onClick={signUpStart}> SIGN UP </CustomButton>
                </ButtonsContainer>
            </form>
        </SignUpContainer>       
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
}) 

export default connect(null, mapDispatchToProps)(SignUp)