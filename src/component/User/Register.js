import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FaceIcon from '@mui/icons-material/Face';
import './loginregister.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, register } from '../../actions/userAction';
import { useAlert } from 'react-alert';
import LocationCityIcon from '@mui/icons-material/LocationCity';
const Register = () => {
    // let navigate = useNavigate();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();
    const { error, isAuthenticated } = useSelector((state) => state.user)

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        fav_city: "",
    })
    const { name, email, password, confirm_password, fav_city } = user;



    const registerSubmit = (e) => {
        e.preventDefault();
        // const myForm = new FormData();
        // myForm.set('name', name);
        // myForm.set('email', email);
        // myForm.set('password', password);
        // myForm.set('confirm_password', confirm_password);
        // myForm.set('fav_city', fav_city);
        dispatch(register({ name, email, password, confirm_password, fav_city }));
        navigate('/login')
        alert.success("Registration Success")

    }
    const registerDataChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })

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



                    <form
                        className="signUpForm"
                        encType='multipart/form-data'
                        onSubmit={registerSubmit}
                    >

                        <div className="signUpName">
                            <FaceIcon />
                            <input
                                type="text"
                                placeholder='Name'
                                required
                                name='name'
                                value={name}
                                onChange={registerDataChange}
                            />
                        </div>

                        <div className="signUpEmail">
                            <MailOutlineIcon />
                            <input
                                type="email"
                                placeholder='Email'
                                required
                                name='email'
                                value={email}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpEmail">
                            <LocationCityIcon />
                            <input
                                type="text"
                                placeholder='City'
                                required
                                name='fav_city'
                                value={fav_city}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpPassword">
                            <LockOpenIcon />
                            <input type="password"
                                placeholder='Password'
                                required
                                name='password'
                                value={password}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpPassword">
                            <LockOpenIcon />
                            <input type="password"
                                placeholder='confirm_password'
                                required
                                name='confirm_password'
                                value={confirm_password}
                                onChange={registerDataChange}
                            />
                        </div>


                        <input type="submit"
                            value="Register"
                            className='signUpBtn'
                        />


                        <Link to='/login'>Login</Link>
                    </form>
                </div>

            </div>
        </Fragment>
    )
}

export default Register