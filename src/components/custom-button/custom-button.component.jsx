import React from 'react'

import './custom-button.styes.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <div className= 
    {`
        ${inverted ? 'inverted' : ''}
        ${isGoogleSignIn ? 
            'google-sign-in'
        : '' } 
        custom-button`} 
    {...otherProps}>
    {children}
    </div>
)

export default CustomButton
