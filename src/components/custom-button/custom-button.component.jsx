import React from 'react'

import './custom-button.styes.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <div className={`${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} {...otherProps}>
        {children}
    </div>
)

export default CustomButton
