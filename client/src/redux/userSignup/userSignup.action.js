import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { USER_SIGNUP, USER_SIGNUP_ERROR } from "./userSignup.type";

const mainUrl = process.env.REACT_APP_MAIN_URL;

export const signupUser = (cred) => async(dispatch) => {
    // const navigate = useNavigate()
    console.log(cred)
    let res = await axios.post(`${mainUrl}/users/signup`, cred)
        .then((res) => {
            dispatch({ type: USER_SIGNUP });
        })
        // .then(()=>{
        //  navigate('/login')
        // })
        .catch((err) => {
            // console.log("err", err)
            dispatch({ type: USER_SIGNUP_ERROR })
        })
};
