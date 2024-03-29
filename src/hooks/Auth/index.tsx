import React, { createContext, useState, useContext, useEffect } from "react";

import api from "../../services/api";
import { database } from "../../database";
import { User as ModelUser } from "../../database/model/User";

import {
  UserSchema,
  AuthContextData,
  AuthProviderProps,
  SignInCredentials,
} from "./types";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<UserSchema>({} as UserSchema);

  useEffect(() => {
    loadUserData();
  }, []);

  async function loadUserData(): Promise<void> {
    const userCollection = database.get<ModelUser>("users");
    const response = await userCollection.query().fetch();

    if (response.length > 0) {
      const userData = response[0]._raw as unknown as UserSchema;

      api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${userData.token}`;
        return config;
      });

      setData(userData);
      setLoading(false);
    }
  }

  async function signIn({ email, password }: SignInCredentials): Promise<void> {
    try {
      const response = await api.post("/sessions", { email, password });

      api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${response.data.token}`;
        return config;
      });

      const { token, user } = response.data;
      const userCollection = database.get<ModelUser>("users");

      await database.write(async () => {
        await userCollection.create((newUser) => {
          newUser.token = token;
          newUser.name = user.name;
          newUser.user_id = user.id;
          newUser.email = user.email;
          newUser.avatar = user.avatar;
          newUser.driver_license = user.driver_license;
        });
      });

      setData({ ...user, token });
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut(): Promise<void> {
    try {
      const userCollection = database.get<ModelUser>("users");
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);

        await userSelected.destroyPermanently();
      });

      setData({} as UserSchema);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function userUpdate(user: UserSchema): Promise<void> {
    try {
      const userCollection = database.get<ModelUser>("users");
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);

        await userSelected.update((userData) => {
          userData.name = user.name;
          userData.avatar = user.avatar;
          userData.driver_license = user.driver_license;
        });
      });

      setData(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user: data, signIn, signOut, userUpdate, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
