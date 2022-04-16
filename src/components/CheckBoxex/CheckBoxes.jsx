import React from 'react';
import { Field, ErrorMessage } from 'formik';

export const CheckBoxes = ({ name, label, options }) => {
    return (
        <>
            <label> {label} </label>
            <Field name={name}>
                {
                    ({ field }) => {
                        return options.map(option => (
                            <React.Fragment key={option.value}>
                                <input
                                    type="checkbox"
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                />
                                <label htmlFor={option.value}> {option.key} </label>
                            </React.Fragment>
                        ))
                    }
                }
            </Field>
        </>
    )
}