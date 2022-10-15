import { ReactNode } from "react";

export interface UserSchema {
  id: string;
  name: string;
  token: string;
  email: string;
  avatar: string;
  user_id: string;
  driver_license: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: UserSchema;
  signOut: () => Promise<void>;
  userUpdate: (user: UserSchema) => Promise<void>;
  signIn: (credentials: SignInCredentials) => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
