import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './userform.css'

import { InputField, Button, ImageUpload, SelectField, RadioButtons, CheckBoxes } from '../../components';

export const UserForm = () => {
    const options = [
        { value: '', key: 'Select' },
        { value: 'mrs', key: 'Mrs' },
        { value: 'ms', key: 'Ms' }
    ]

    const Gender = [
        { value: 'male', key: 'Male' },
        { value: 'female', key: 'Fe-male' }
    ]

    const UserType = [
        { value: 'developer', key: 'Developer' },
        { value: 'designer', key: 'Designer' }
    ]

    let initialValues = {
        title : "",
        firstName: "",
        lastName: "",
        email: "",
        gender : "",
        userType : "",
        dateOfBirth : "",
        password: "",
        confirmPassword : "",
        phonenum: "",
        comment: "",
        image: "",
    }

    // Min requirements
    // Number check on name
    // phone format 03231234567 > (+92) 323 1234567 and donot accept alphabets
    // image must accept images only, png, jpg, bmp, svg
    const validationSchema = yup.object({
        title: yup.string().required("Required!"),
        firstName: yup.string().min(2)
            .required("Required!")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets allowed"),
        lastName: yup.string().required("Required!"),
        email: yup.string().required("Required!").email("Invalid Email"),
        password: yup.string().required("Required!")
            .min(5, "Min Length is 5 chars")
            .max(16, "Max length is 16 chars"),
            confirmPassword : yup.string().oneOf([yup.ref('password'),''],"Password Must match").required("Required!"),
        phonenum: yup.string()
            .required("Required!")
            .matches(/^[0-9\+\(\)\-\s]+$/, "Only Numeric allowed"),
        image: yup.string().required("Required!")
            .test("type", "Only the following formats are accepted: png, jpg, bmp, svg,jpeg", (val) => {
                const type = val && val.split(":")[1].split(";")[0];
                const supportedFiles = ['image/png', 'image/jpg', 'image/bmp', 'image/svg', 'image/jpeg'];
                return val && supportedFiles.includes(type)
            }),
        comment: yup.string().required("Required!"),
    })

    const onSubmit = (values, onSubmitProps) => {
        console.log("User", values);
        onSubmitProps.resetForm();
    }

    const handlBlur = (setFieldValue, field) => {
        // let phone = "03439444098";
        // phone = phone.replace(/[^\d^]/g, "");
        // const removeZero = phone[0] === "0" ? phone.split("").slice(1).join("") : phone;
        // const formatPhone = removeZero.replace(/(\d{3})(\d{7})/, "(+92) $1 $2")
        // console.log(formatPhone);
        let keyword = field.value;
        let userPhoneNum = '(+92) xxx xxxxxxx';
        keyword = keyword[0] === "0" ? keyword.split("").slice(1).join("") : keyword;

        for (let num of keyword) {
            userPhoneNum = userPhoneNum.replace('x', num);
        }
        setFieldValue("phonenum", userPhoneNum);
    }

    return (
        <>
            <div className='main'>
                <h1>User Data</h1>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {
                        (props) => {
                            const { setFieldValue, isValid } = props;
                            return <Form>
                                <SelectField
                                    name={'title'}
                                    id={'title'}
                                    label={'Select Title'}
                                    options={options}
                                />
                                <InputField
                                    name={'firstName'}
                                    id={'fname'}
                                    label={'First Name'}
                                />
                                <InputField
                                    name={'lastName'}
                                    id={'lname'}
                                    label={'Last Name'}
                                />
                                <InputField
                                    name={'email'}
                                    id={'email'}
                                    label={'Email'}
                                    type={'email'}
                                />
                                <RadioButtons
                                    name={'gender'}
                                    label={'Select Gender'}
                                    options={Gender}
                                />
                                <CheckBoxes
                                    name={'userType'}
                                    label={'User Type'}
                                    options={UserType}
                                />
                                <InputField
                                    name={'password'}
                                    id={'password'}
                                    label={'Password'}
                                    type={'password'}
                                />
                                <InputField
                                    name={'confirmPassword'}
                                    id={'confirmPassword'}
                                    label={'Confirm Password'}
                                    type={'password'}
                                />
                                <InputField
                                    name={'dateOfBirth'}
                                    id={'dateOfBirth'}
                                    label={'Date of Birth'}
                                    type={'date'}
                                />

                                <Field name="phonenum">
                                    {
                                        (phoneProps) => {
                                            const { field, form, meta } = phoneProps;
                                            const { touched } = form;
                                            return <InputField
                                                id={'phonenum'}
                                                label={'Phone Number'}
                                                type={'tel'}
                                                {...field}
                                                {...touched}
                                                onBlur={() => handlBlur(setFieldValue, field)}
                                            />
                                        }
                                    }
                                </Field>
                                <InputField
                                    name={'comment'}
                                    id={'comment'}
                                    label={'Comment'}
                                />

                                <div className='form_control'>
                                    <label htmlFor="image">Image</label>
                                    <Field name="image">
                                        {
                                            ({ meta,field }) => {
                                                return <div>
                                                    <ImageUpload
                                                        fileupload={setFieldValue}
                                                        field={field}
                                                    />
                                                    {
                                                        meta.value &&
                                                            meta.error ?
                                                            <span> {meta.error} </span>
                                                            : null
                                                    }
                                                </div>
                                            }
                                        }
                                    </Field>
                                    <ErrorMessage name='image' component="span" />
                                </div>

                                <Button
                                    type={"submit"}
                                    disabled={!isValid}
                                    text={"Submit"}
                                />
                            </Form>
                        }
                    }
                </Formik>
            </div>
        </>
    )
}