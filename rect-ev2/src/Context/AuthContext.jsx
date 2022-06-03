import React, { useReducer, useState } from "react";

export const AuthContext = React.createContext();

const initState = {
  isAuth: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };
    }
    case "REGISTER_SUCCESS": {
      return {
        ...state,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initState);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
