import React, { useState, useEffect } from 'react'
import { Formik, Form, } from 'formik';
import { InputField, Button } from '../../components';
import { Wrapper } from './style';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slice/userLogin';
import { useNavigate } from 'react-router-dom';
import { LoginActions } from '../../redux/actions';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, success, loading } = useSelector(state => state.login);

    useEffect(() => {
        success && navigate("/user-react-table")
    }, [success])


    const initialValues = {
        email: "",
        password: "",
    }

    const validationSchema = yup.object({
        email: yup.string().required("Required!"),
        password: yup.string().min(6).max(16).required("Required!")
    })

    const onSubmit = (values) => {
        dispatch(LoginActions.loginUser(values))
    }
    console.log("toktoktok", user)
    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnMount
            >
                {
                    ({ isValid }) => {
                        return <Form>
                            <InputField
                                label={"User Name"}
                                id={"email"}
                                name={"email"}
                            />
                            <InputField
                                label={"Password"}
                                type={"password"}
                                id={"password"}
                                name={"password"}
                            />
                            <Button
                                text={"Submit"}
                                type={"submit"}
                            />
                        </Form>
                    }
                }
            </Formik>
        </Wrapper>
    )
}