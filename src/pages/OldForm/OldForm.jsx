import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

export const OldFom = () => {
    let [first, setfirst] = useState("")
    const initialValues = {
        name: "",
        email: "",
        password: "",
        fatherName: ""
    }
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log("Data", values)
        },
        // validate : values => {
        //   let errors = {};

        //   if(!values.name){
        //     errors.name = "Name field is required";
        //   }
        //   if(!values.email){
        //     errors.email = "Email field is required";
        //   }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(!values.email)){
        //     errors.email = "Email is invalid";
        //   }
        //   if(!values.password){
        //     errors.password = "Password field is required";
        //   }
        //   return errors;
        // }
        validationSchema: yup.object({
            name: yup.string().required('Required'),
            email: yup.string().required("Required").email("Invalid Email"),
            password: yup.string().required("Required").min(6, "Min Length is six").max(16, 'max length is sixteen')
        })
    })

    const submitFormData = () => {
        console.log(formik.values);
    }
    const handlBlr = (e) => {
        setfirst((key) => {
            let keyword = key;
            let userPhoneNum = '(+92) xxx xxxxxxx';
            keyword = keyword[0] === "0" ? keyword.split("").slice(1).join("") : keyword;

            for (let num of keyword) {
                userPhoneNum = userPhoneNum.replace('x', num);
            }
            return userPhoneNum
        });
    }
    
    return (
        <>
            <input type="text" value={first} onBlur={handlBlr} onChange={(e) => setfirst(e.target.value)} />
            <div className='main'>
                <form onSubmit={formik.handleSubmit} id="myform">
                    <div className='form_control'>
                        <label htmlFor="name">Name</label>
                        <input onBlur={formik.handleBlur} type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
                        {formik.touched.name && formik.errors.name ? formik.errors.name : null}
                    </div>
                    <div className='form_control'>
                        <label htmlFor="name">Email</label>
                        <input onBlur={formik.handleBlur} type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? formik.errors.email : null}
                    </div>
                    <div className='form_control'>
                        <label htmlFor="name">Password</label>
                        <input onBlur={formik.handleBlur} type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
                        {formik.touched.password && formik.errors.password ? formik.errors.password : null}
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <button form="myform" disabled={!formik.isValid} onClick={submitFormData}>Submit Outside form</button>
            </div>
        </>
    )
}