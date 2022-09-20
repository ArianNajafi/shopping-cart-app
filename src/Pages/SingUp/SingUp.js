import './SingUp.css';
import { useFormik } from 'formik'
import * as yup from 'yup';
import { NavLink } from 'react-router-dom'

const SingUpPage = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formik.values);
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },

        // validate: (value) => {
        //     let error = {};
        //     if (!value.name)
        //         error.name = "name empity";
        //     return error
        // }

        validationSchema: yup.object({
            name: yup.string().required("اسم خود را وارد کنید"),
            email: yup.string().required("ایمیل خود را وارد کنید").email("ایمیل وارد شده درست نمیباشد"),
            password: yup.string().required("رمز عبور خود را وارد کنید"),
            confirmPassword: yup.string().required("تکرار رمز عبور خود را وارد کنید").oneOf([yup.ref("password"), null], "تکرار رمز عبور مطابقت ندارد")
        }),

        validateOnMount: true,
    })



    return (
        <div className='singUpPage'>

            <form className='singUp_form' onSubmit={submitHandler}>
                <h1 className="singUp_form_title">ثبت‌نام</h1>

                <div className="formControl">
                    <label className='singUp_labels'>نام و نام خانوادگی</label>
                    <input className='singUp_inputs'
                        type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                    ></input>
                    <p className='formErrors'>{formik.errors.name && formik.touched.name ? formik.errors.name : ""}</p>
                </div>

                <div className="formControl">
                    <label className='singUp_labels'>ایمیل</label>
                    <input className='singUp_inputs'
                        type="text"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                    ></input>
                    <p className='formErrors'>{formik.errors.email && formik.touched.email ? formik.errors.email : ""}</p>
                </div>

                <div className="formControl">
                    <label className='singUp_labels'>رمز عبور</label>
                    <input className='singUp_inputs'
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                    ></input>
                    <p className='formErrors'>{formik.errors.password && formik.touched.password ? formik.errors.password : ""}</p>
                </div>

                <div className="formControl">
                    <label className='singUp_labels'>تکرار رمز عبور</label>
                    <input className='singUp_inputs'
                        type="password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange("confirmPassword")}
                        onBlur={formik.handleBlur("confirmPassword")}
                    ></input>
                    <p className='formErrors'>{formik.errors.confirmPassword && formik.touched.confirmPassword ? formik.errors.confirmPassword : ""}</p>
                </div>

                <button className="singUp_btn" disabled={!formik.isValid}>ثبت‌نام</button>

                <div className='goToLoginDiv'>
                    قبلا ثبت‌نام کردید؟
                    <NavLink to="/login" className='goToLoginBtn'>وارد شوید</NavLink>
                </div>
            </form>

        </div>
    );
}

export default SingUpPage;