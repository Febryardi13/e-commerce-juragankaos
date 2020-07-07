import React from 'react'

import './custom-button.styes.scss'

const CustomButton = ({ children, ...otherProps }) => (
    <div className='custom-button' {...otherProps}>
        {children}
    </div>
)

export default CustomButton
