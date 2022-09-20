import './Login.css';
import { useFormik } from 'formik'
import * as yup from 'yup';
import { NavLink } from 'react-router-dom'

const LoginPage = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formik.values);
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        // validate: (value) => {
        //     let error = {};
        //     if (!value.name)
        //         error.name = "name empity";
        //     return error
        // }

        validationSchema: yup.object({
            email: yup.string().required("ایمیل خود را وارد کنید").email("ایمیل وارد شده درست نمیباشد"),
            password: yup.string().required("رمز عبور خود را وارد کنید"),
        }),

        validateOnMount: true,
    })



    return (
        <div className='LoginPage'>

            <form className='login_form' onSubmit={submitHandler}>
                <h1 className="login_form_title">ورود</h1>

                <div className="formControl">
                    <label className='login_labels'>ایمیل</label>
                    <input className='login_inputs'
                        type="text"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                    ></input>
                    <p className='formErrors'>{formik.errors.email && formik.touched.email ? formik.errors.email : ""}</p>
                </div>

                <div className="formControl">
                    <label className='login_labels'>رمز عبور</label>
                    <input className='login_inputs'
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                    ></input>
                    <p className='formErrors'>{formik.errors.password && formik.touched.password ? formik.errors.password : ""}</p>
                </div>

                <button className="login_btn" disabled={!formik.isValid}>ثبت‌نام</button>

                <div className='goToSingUpDiv'>
                    حساب کاربری ندارید؟
                    <NavLink to="/singUp" className='goToSingUpBtn'>ثبت‌نام</NavLink>
                </div>
            </form>

        </div>
    );
}

export default LoginPage;