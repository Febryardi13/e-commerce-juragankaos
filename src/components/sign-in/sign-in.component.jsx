import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

handleSubmit = e => {
    e.preventDefault()

    this.setState({ email:'', password:'' });
}

handleChange = e => {
    const { value, name } = e.target;
    console.log(value, name)

    this.setState({ [name]:value })
}

render() { 
    return ( 
        <div className='sign-in'>
            <h2>
                I already have account
            </h2>
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
                <div className='buttons'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle} > {' '} Sign in with Google {' '} </CustomButton>
                </div>
            </form>
        </div>
        );
}
    
}
 
export default SignIn;