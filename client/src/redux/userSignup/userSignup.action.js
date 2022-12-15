import axios from "axios";
import { Navigate } from "react-router-dom";
import { USER_SIGNUP, USER_SIGNUP_ERROR } from "./userSignup.type";

const mainUrl = process.env.REACT_APP_MAIN_URL;

export const signupUser = (cred) => (dispatch) => {
    console.log(cred)
    let res = axios.post(`${mainUrl}/users/signup`, cred)
        .then((res) => {
            dispatch({ type: USER_SIGNUP });
        }).then(()=>{
        //    return <Navigate to="/login"/>
        })
        .catch((err) => {
            // console.log("err", err)
            dispatch({ type: USER_SIGNUP_ERROR })
        })
};
