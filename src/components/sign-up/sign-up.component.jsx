import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { 
    SignUpContainer,
    TitleContainer,
    ButtonsContainer
} from './sign-up.styles'
// import './sign-up.styles.scss'


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

            const {displayName, email, password, confirmPassword} = this.state

            if(password !== confirmPassword ) {
                alert('Password not matching with Confirm Password')
                return;
            }

            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password)

                await createUserProfileDocument(user, { displayName })
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                })

            } catch (error) {  
                console.log(error)
            }
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
                            <CustomButton type='submit' onClick={this.handleSubmit}> SIGN UP </CustomButton>
                        </ButtonsContainer>
                    </form>
                </SignUpContainer>       
            )
        }
    
}

export default SignUp