import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userAction'
import { useAlert } from 'react-alert';
const Header = () => {
    const [theme, setTheme] = useState("Light-theme");
    const { isAuthenticated } = useSelector((state) => state.user)
    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleTheme = () => {
        if (theme === "Light-theme") {
            setTheme("Dark-theme");
        }
        else {
            setTheme("Light-theme")
        }
    }
    useEffect(() => {
        document.body.className = theme;
        // prompt(theme)
    }, [theme])
    const logoutHander = () => {
        dispatch(logout())
        alert.success("Logout success")
        navigate('/register')
        window.location.reload();
    }
    return (
        <Fragment>
            <div className="navbar">
                <div>
                    <Link to={'/'}>
                        Home
                    </Link>
                </div>
                <div>
                    <Link to={'/convert'}>
                        Temprature Coverter
                    </Link>
                </div>
                {
                    isAuthenticated ?
                        <>
                            <div>
                                <Link to={'/fav-city'}>
                                    Fav City
                                </Link>
                            </div>
                            <div onClick={() => logoutHander()}>
                                Logout
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <Link to={'/login'}>
                                    Login
                                </Link>

                            </div>

                            <div>
                                <Link to={'/register'}>
                                    Register
                                </Link>
                            </div>
                        </>

                }

                <div onClick={(() => toggleTheme())}>
                    Toggle Theme
                </div>

            </div>

        </Fragment >
    )
}

export default Header