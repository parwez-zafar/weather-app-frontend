import React, { Fragment, useEffect, useState } from 'react';
import './loginregister.css';
import { Link, useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { clearErrors, login } from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';


const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();
    const { error, isAuthenticated } = useSelector((state) => state.user)
    const loginSubmit = (e) => {
        // console.log("login form submitted");
        e.preventDefault();
        dispatch(login({ email: loginEmail, password: loginPassword }));
        navigate('/')
        alert.success("Login Success")
        // setTimeout(() => {
        //     window.location.reload();
        // }, 500);

    }
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        if (isAuthenticated) {
            navigate('/');
        }
    }, [error, dispatch, navigate, isAuthenticated, alert])
    return (
        <Fragment>
            <div className="Container">
                <div className="Box">


                    <form className='loginForm' onSubmit={loginSubmit}>

                        <div className="loginEmai">
                            <MailOutlineIcon />
                            <input type="email"
                                placeholder='Email'
                                required
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </div>

                        <div className="loginPassword">
                            <LockOpenIcon />
                            <input type="password"
                                placeholder='Password'
                                required
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>


                        <input type="submit"
                            value="Login"
                            className='loginBtn'
                        />
                        <Link to='/register'>Register</Link>
                    </form>

                </div>

            </div>
        </Fragment>
    )
}

export default Login