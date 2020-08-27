import React from 'react';

import { 
    GroupContainer,
    FormInputContainer,
    FormInputLabel
 } from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps}/>
        {
            label ? 
            (
                <FormInputLabel 
                    className={`${
                        otherProps.value.length ? 'shrink' : ''} 
                        form-input-FormInputLabel`}
                >
                    {label}
                </FormInputLabel>
            )
            :
            null
        }
    </GroupContainer>
)

export default React.memo(FormInput);