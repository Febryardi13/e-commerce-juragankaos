import React, { useState } from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import { 
    googleSignInStart, 
    emailSignInStart 
} from '../../redux/user/user.action'

import { 
    SignInContainer,
    TitleContainer,
    ButtonsContainer
} from './sign-in.styles'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredential] = useState({ email:'', password:'' })
    const { email, password } = userCredentials

    const handleSubmit = async e => {
        e.preventDefault()

        emailSignInStart(email, password)
    }

    const handleChange = e => {
        const { value, name } = e.target;

        setUserCredential({ ...userCredentials, [name]:value })
    }

    return ( 
        <SignInContainer>
            <TitleContainer>
                I already have account
            </TitleContainer>
            <span>
                Sign in with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={handleChange}
                    label="email"
                    required 
                />
                <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={handleChange}
                    label="password"
                    required 
                />
                <ButtonsContainer>
                    <CustomButton type="submit" onClick={handleSubmit}>Sign In</CustomButton>
                    <CustomButton 
                        type="button" 
                        isGoogleSignIn 
                        onClick={googleSignInStart} 
                    > 
                        {' '} Sign in with Google {' '} 
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
        );
    }
    

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({ email, password })
    ) 
})
 
export default connect (null, mapDispatchToProps) (React.memo(SignIn));