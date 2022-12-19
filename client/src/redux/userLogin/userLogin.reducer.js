import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGOUT } from "./userLogin.type";

const userToken = localStorage.getItem("userToken");
const initialState = {
  isAuth: !!userToken,
  token: userToken || "",
  isError: false,
  email: null,
};

export const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      //   const { email, token, name } = payload;
      localStorage.setItem("userToken", JSON.stringify(payload));
      //   localStorage.setItem("email", JSON.stringify(email));
      //   localStorage.setItem("name", JSON.stringify(name));
      console.log(payload);
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        isError: false,
        email: payload.email,
      };
    }

    case USER_LOGOUT: {
      localStorage.removeItem("userToken");
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: false,
      };
    }

    case USER_LOGIN_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
