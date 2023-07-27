import axios from 'axios';

import { CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/userConstants"
import { AxiosApi } from '../axios/api';

// register user
export const register = (userData) => async (dispatch) => {
    try {
        console.log("userData", userData)
        dispatch({ type: REGISTER_USER_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await AxiosApi.post(`/api/v1/register`, userData, config);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })
    }
    catch (error) {
        console.log("error is", error);
        dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data.message });
    }
}


// register user
export const login = (userData) => async (dispatch) => {
    try {
        console.log("userData", userData)
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(`/api/v1/login`, userData, config);
        dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    }
    catch (error) {
        console.log("error is", error);
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
}

// Load user
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        const { data } = await axios.get(`/api/v1/me`)
        // console.log("entered");
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    }
    catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.message });
    }
}

// logout
export const logout = () => async (dispatch) => {
    try {

        await axios.get(`/api/v1/logout`)
        // console.log("entered");
        dispatch({ type: LOGOUT_FAIL });
    }
    catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.message });
    }
}
// Clear errors
export const clearErrors = () => (dispatch) => {

    dispatch({ type: CLEAR_ERRORS });
}