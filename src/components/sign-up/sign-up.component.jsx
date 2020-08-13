import React from 'react'

import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/user.action'

import { 
    SignUpContainer,
    TitleContainer,
    ButtonsContainer
} from './sign-up.styles'


class SignUp extends React.Component {
    constructor() {
        super() 
            this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        }    

        handleSubmit = async event => {
            event.preventDefault();
            const { signUpStart } = this.props
            const {displayName, email, password, confirmPassword} = this.state

            if(password.length <= 7 || confirmPassword.length <= 7) {
                alert('Password must be 8 character or more')
                if(password !== confirmPassword ) {
                    alert('Password not matching with Confirm Password')
                    return
                }                
            }
            signUpStart({ email, password, displayName })
        }

        handleChange = event => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }

        render () {
            const {displayName, email, password, confirmPassword} = this.state
            return (
                <SignUpContainer>
                    <TitleContainer>
                        I don't have a account
                    </TitleContainer>
                    <span>
                        Sign up with your email and password
                    </span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            type='text'
                            name='displayName'
                            value={displayName}
                            onChange={this.handleChange}
                            label='display name'
                        />
                        <FormInput
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            label='email'
                        />
                        <FormInput
                            type='password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            label='password'
                        />
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={this.handleChange}
                            label='confirm password'
                        />
                        <ButtonsContainer>
                            <CustomButton type='submit' onClick={signUpStart}> SIGN UP </CustomButton>
                        </ButtonsContainer>
                    </form>
                </SignUpContainer>       
            )
        }
    
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
}) 

export default connect(null, mapDispatchToProps)(SignUp)