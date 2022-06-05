import React, { createContext, useEffect, useReducer } from "react";
import * as api from "../api"
import { messageSuccess } from "../components/message";
import AuthReducer from "../redux/reducers/Auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    authLoading: true,
    isAuthenticated: false,
    Account: null,
  });

  //#region Authenticate if user is logged in
  const loadAccount = async () => {
    if (localStorage["Auth_Token"]) {
      console.log(`${localStorage["Auth_Token"]}`);
      api.setAuthToken(localStorage["Auth_Token"]);
    }

    try {
      const response = await api.verifyAuthToken();
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: { isAuthenticated: true, Account: response.data.Account },
        });
      }
    } catch (error) {
      localStorage.removeItem("Auth_Token");
      api.setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: false, Account: null },
      });
    }
  };
  //#endregion

  //#region login
  const signInAccount = async (userForm) => {
    try {
      const response = await api.signInAccount(userForm);
      if (response.data.success) {
        localStorage.setItem("Auth_Token", response.data.accessToken);
      }

      loadAccount();
      messageSuccess("Login Success");

      return response.data;
    } catch (error) {
      if (error.data) {
        return error.data;
      } else {
        return { success: false, message: error.message };
      }
    }
  };
  //#endregion

  //#region logout
  const logoutAccount = () => {
    localStorage.removeItem("Auth_Token");
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false, Account: null },
    });
  };
  //#endregion

  //#region context data
  const authContextData = { signInAccount, logoutAccount, authState };
  //#endregion

  useEffect(() => loadAccount(), []);

  //return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
