import { ReactNode } from "react";

export interface UserSchema {
  id: string;
  name: string;
  email: string;
  avatar: string;
  driverLicense: string;
}

export interface AuthState {
  token: string;
  user: UserSchema;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: UserSchema;
  signIn: (credentials: SignInCredentials) => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
