import { ErrorMessage, useField } from "formik";
import "../../style/ContactPage/input.scss";
const Input = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return(
        <div className="input">
            <label htmlFor={field.name} className="label">{label}</label>
            <input className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} 
            {...props}
            autoComplete="off"/>
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}

export default Input;