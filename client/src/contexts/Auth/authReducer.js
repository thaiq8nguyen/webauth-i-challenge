import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  SET_IS_LOADING
} from "./types";
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        loginError: null,
        isLoading: false
      };
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginError: action.payload,
        isLoading: false
      };
    }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        registrationError: null,
        isLoading: false
      };
    case REGISTRATION_FAILURE: {
      return {
        ...state,
        registrationError: action.payload,
        isLoading: false
      };
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
