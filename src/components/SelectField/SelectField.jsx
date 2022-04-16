import React from 'react';
import { Field, ErrorMessage } from 'formik';

export const SelectField = ({ label, name, id, options, ...rest }) => {
    return (

        <div className='form_control'>
            <label htmlFor={id}> {label} </label>
            <Field as="select" id={id} name={name} {...rest}>
                {
                    options.map(option => (
                        <option key={option.value} value={option.value}> {option.key} </option>
                    ))
                }
            </Field>
            <ErrorMessage name={name} component="span" />
        </div>

    )
}