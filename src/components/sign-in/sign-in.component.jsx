import React from 'react';
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

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
        }
    }

handleSubmit = async e => {
    e.preventDefault()

    const { emailSignInStart } = this.props
    const { email, password } = this.state

    emailSignInStart(email, password)
}

handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]:value })
}

render() { 
    const { googleSignInStart } = this.props
    return ( 
        <SignInContainer>
            <TitleContainer>
                I already have account
            </TitleContainer>
            <span>
                Sign in with your email and password
            </span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    required 
                />
                <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label="password"
                    required 
                />
                <ButtonsContainer>
                    <CustomButton type="submit" onClick={this.handleSubmit}>Sign In</CustomButton>
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
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({ email, password })
    ) 
})
 
export default connect (null, mapDispatchToProps)(SignIn);