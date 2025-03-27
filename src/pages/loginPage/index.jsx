import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import style from './index.module.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import cover from '../../assets/login_cover.jpg'

export default function LoginPage() {

    const navegate = useNavigate();


    const handleNav = () => {
        navegate("/register")
    }

    const validationSchema = Yup.object({
        userEmail: Yup.string().email('Invalid Email').required('Email is required'),
        userPassword: Yup.string().required('Password is required')
    })


    const auth = getAuth();
    const handleSubmit = (values) => {
        signInWithEmailAndPassword(auth, values.userEmail, values.userPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                let accessToken = user.accessToken;
                sessionStorage.setItem('Access Token', accessToken);
                navegate("/chats");

            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.error("Error Code:", error.code);
                console.error("Error Message:", error.message);
            });
        console.log(values)
    }

    return (
        <div className=' d-flex'>

            <div id={style.side} className=' d-none d-lg-flex w-100 w-lg-50'>
                <div className=' position-absolute d-flex flex-column align-items-center z-2'>
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button onClick={handleNav}  className='btn btn-primary col-12'>Sign up</button>
                </div>
                <img src={cover} alt="" />
            </div>
            <div id={style.loginSide} className=' w-100 w-lg-50 p-5 p-md-0'>
                <Formik validationSchema={validationSchema} initialValues={{ userEmail: "", userPassword: "" }} onSubmit={handleSubmit}>
                    <Form id={style.form}>
                        <h1 className=' text-center'>Login To Chat</h1>
                        <div className=' d-flex flex-column gap-4'>
                            <div className={style.field}>
                                <Field className={style.input} name="userEmail" type="email" placeholder='Enter your email'></Field>
                                <ErrorMessage name="userEmail" component="div" />
                            </div>
                            <div className={style.field}>
                                <Field className={style.input} name="userPassword" type="password" placeholder='Enter your password'></Field>
                                <ErrorMessage name="userPassword" component="div" />
                            </div>
                            <button type="submit" >Login</button>
                            
                        </div>
                        <p>To create account <Link to="/register"> Sign up </Link></p>
                    </Form>
                </Formik>
            </div>



        </div>
    )
}
