import React, { useEffect, useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import { auth } from "../../utils/authAPI";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  SET_IS_LOADING
} from "./types";

const AuthState = props => {
  const initialState = {
    loginError: null,
    registrationError: null,
    isAuthenticated: false,
    isTokenExpired: false,
    isAdmin: false,
    isLoading: false,
    token: null
  };

  const localState = JSON.parse(localStorage.getItem("auth"));

  const [state, dispatch] = useReducer(authReducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(state));
  }, [state]);

  const loginUser = async credential => {
    dispatch({
      type: SET_IS_LOADING,
      payload: true
    });
    try {
      const res = await auth().post("/login", credential);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    } catch (errors) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: errors.response.data
      });
    }
  };

  const registerUser = async user => {
    dispatch({
      type: SET_IS_LOADING,
      payload: true
    });
    try {
      const res = await auth().post("/register", user);

      dispatch({
        type: REGISTRATION_SUCCESS,
        payload: res.data
      });
    } catch (errors) {
      dispatch({
        type: REGISTRATION_FAILURE,
        payload: errors.response.data
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginError: state.loginError,
        registrationError: state.registrationError,
        isAuthenticated: state.isAuthenticated,
        isAdmin: state.isAdmin,
        isLoading: state.isLoading,
        loginUser,
        registerUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
