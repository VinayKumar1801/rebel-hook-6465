import axios from "axios";
import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGOUT } from "./userLogin.type";

const mainUrl = process.env.REACT_APP_MAIN_URL;
// const mainUrl = `http://localhost:8080`;


export const userLogin = (cred) => (dispatch) => {
    console.log(cred)
    let res = axios.post(`${mainUrl}/users/login`, cred)
        .then((res) => {
            // console.log("token", res.data,res.data.email)
            dispatch({ type: USER_LOGIN, payload:{token: res.data.token,name:res.data.user,email:res.data.email }});
        })
        .catch(() => {
            dispatch({ type: USER_LOGIN_ERROR })
        })
};
export const userLogout = ()=>(dispatch) =>{
    let res = axios.post(`${mainUrl}/users/logout`)
        .then((res) => {
            dispatch({ type: USER_LOGOUT});

        })
        .catch(() => {
            // dispatch({ type: USER_LOGOUT_ERROR })
        })



} 