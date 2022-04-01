import React, { createContext, useState, useEffect, useContext } from "react";
// import { api, api_git } from '../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";
import * as Facebook from "expo-facebook";
import * as AppleAuthentication from "expo-apple-authentication";

import {
  AUTH_URI,
  AUTH_URL,
  RESP_TYPE,
  SCOPE_GOOGLE,
} from "../config/googleAuth";

const SCOPE = SCOPE_GOOGLE;
const RESPONSE_TYPE = RESP_TYPE;
const AUTHENTICATE_URI = AUTH_URI;
const USER_AUTH_URL = AUTH_URL;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

type User = {
  id: string;
  email: string;
  name: string;
  picture?: any;
};

type UserFacebook = {
  email: string;
  name: string;
  picture: {
    data: {
      url: string;
    };
  };
  id: string;
};

type AuthContextData = {
  user: User;
  isSigningIn: boolean;
  signInGoogle: () => Promise<void>;
  signInApple: () => Promise<void>;
  signInFacebook: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthResponse = {
  user: User;
};
type AuthorizationResponse = {
  type?: string;
  params: {
    access_token?: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const userStorageKey = "@Auth:user";
 

  async function signInGoogle() {
    try {
      setIsSigningIn(true);
      const authUrl = `${AUTHENTICATE_URI}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const authSessionResponse = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (authSessionResponse.type === "success") {
        const authResponse = await fetch(
          `${USER_AUTH_URL}?alt=json&access_token=${authSessionResponse.params.access_token}`
        );
        const userInfo = (await authResponse.json()) as User;

        if (userInfo) {
          const userLogged = {
            id: userInfo.id,
            name: userInfo.name,
            email: userInfo.email,
            picture: userInfo.picture,
          };

          await AsyncStorage.setItem("@Auth:user", JSON.stringify(userInfo));
          console.log("user", userLogged);

          setUser(userLogged);
        }
      }
      setIsSigningIn(false);
    } catch {
      throw new Error("Não foi possível autenticar");
    } finally {
      setIsSigningIn(false);
    }
  }
  async function signInApple() {
    try {
      setIsSigningIn(true);
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      if (credential) {
        const userLogged = {
          id: String(credential.user),
          name: credential.fullName!.givenName!,
          email: credential.email!,
          picture: undefined,
        };

        await AsyncStorage.setItem("@Auth:user", JSON.stringify(userLogged));
        setUser(userLogged);
      }
    } catch {
      throw new Error("Não foi possível autenticar");
    } finally {
      setIsSigningIn(false);
    }
  }
  async function signInFacebook() {
    try {
      setIsSigningIn(true);
      await Facebook.initializeAsync("281646310697153");
      const userFace = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      console.log("FACEBOOK", userFace);
      if (userFace.type === "success") {
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${userFace.token}`
        );
        const data = (await response.json()) as User;
        console.log("USUARIO", data);
        if (data) {
          const userLogged = {} as User;
          userLogged.email = data.email;
          userLogged.name = data.name;
          userLogged.picture = data.picture!.data!.url;
          await AsyncStorage.setItem("@Auth:user", JSON.stringify(userLogged));
          setUser(userLogged);
        }
      } else {
        // type === 'cancel'
      }
      setIsSigningIn(false);
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    } finally {
      setIsSigningIn(false);
    }
  }
  async function signOut() {
    await AsyncStorage.removeItem(userStorageKey);
    setUser({} as User);
    // AsyncStorage.clear().then(() => {
    //   setUser({} as User);
    // });
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const storageUser = await AsyncStorage.getItem(userStorageKey);
      //   const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);

      if (storageUser) {
        //     api_git.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
        setUser(JSON.parse(storageUser));
      }
      setIsSigningIn(false);
    }
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isSigningIn,
        signInGoogle,
        signInFacebook,
        signInApple,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
