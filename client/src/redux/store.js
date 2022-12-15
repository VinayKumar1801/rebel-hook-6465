// {
//   /* only use store.js file when you working ... remove all code before push or commit  */
// }
import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer } from "./userLogin/userLogin.reducer";
import { userSignupReducer } from "./userSignup/userSignup.reducer";
const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userSignup: userSignupReducer
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
