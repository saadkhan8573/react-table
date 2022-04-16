import React from 'react';
import { Field, ErrorMessage } from 'formik'
import { GenderField, Label, Main } from './style';

export const RadioButtons = ({ name, label, options }) => {
    return (
        <>
            <Main>
                <Label> {label} </Label>
                <Field name={name}>
                    {
                        ({ field }) => {
                            return <GenderField>
                                {
                                    options.map(option => (
                                        <React.Fragment key={option.value}>
                                            <input type="radio" id={option.value} {...field} value={option.value} />
                                            <label htmlFor={option.value}> {option.key} </label>
                                        </React.Fragment>
                                    ))
                                }
                            </GenderField>
                        }

                    }
                </Field>
                <ErrorMessage name={name} component="span" />
            </Main>
        </>
    )
}