import React, { createContext, useState, useContext } from "react";

import api from "../../services/api";

import {
  AuthState,
  AuthContextData,
  AuthProviderProps,
  SignInCredentials,
} from "./types";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post("/sessions", { email, password });

    api.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${response.data.token}`;
      return config;
    });

    const { token, user } = response.data;
    setData({ token, user });
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
