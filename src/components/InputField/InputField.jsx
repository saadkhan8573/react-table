import { Field, ErrorMessage } from 'formik';

export const InputField = ({ label, type, id, name, ...rest}) => {
    return (
        <div className='form_control'>
            <label htmlFor={id}>{label}</label>
            <Field type={type || "text"} id={id} name={name}  />
            <ErrorMessage name={name} component="span" />
        </div>
    )
}
