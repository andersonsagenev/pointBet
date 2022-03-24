
import React, { createContext, useState, useEffect, useContext } from 'react';
// import { api, api_git } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  { AUTH_URI, AUTH_URL }  from '../config/googleAuth'
import * as AuthSession from 'expo-auth-session';
import * as Facebook from "expo-facebook";
// import { COLLECTION_APPOINTMENT, USER_STORAGE, TOKEN_STORAGE } from '../config/database';

const  SCOPE  = encodeURI('profile email');
const  RESPONSE_TYPE= 'token';
const  AUTHENTICATE_URI  = AUTH_URI;
const  USER_AUTH_URL  = AUTH_URL;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { APP_ID } = process.env;
 

type User = {
    email: string;
    name: string;
    family_name: string;
    given_name: string;
    picture: string;
    locale: string;
}

type UserFacebook = {
    email: string;
    name: string;
    picture: {
        data: {
            url: string
        }
    }
    id: string;
}

type AuthContextData = {
    user: User | null;
    userFacebook: UserFacebook | null;
    isSigningIn: boolean;
    isSigningInFace: boolean;
    signInGoogle: () => Promise<void>;
    signInFacebook: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

type AuthResponse = {
        user: User;
}
type AuthorizationResponse = {
    type?: string;
    params: {
        access_token?: string;
    },
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [userFacebook, setUserFacebook] = useState<UserFacebook | null>(null);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [isSigningInFace, setIsSigningInFace] = useState(false);

    async function signInGoogle() {
        
        try {
            setIsSigningIn(true);
             const authUrl = `${AUTHENTICATE_URI}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
             
             const authSessionResponse  = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

            if(authSessionResponse.type === 'success') {
                const authResponse = await fetch(`${USER_AUTH_URL}?alt=json&access_token=${authSessionResponse.params.access_token}`);
                const userInfo = await authResponse.json() as User;
                await AsyncStorage.setItem('@Auth:user', JSON.stringify(userInfo));
                console.log('user', userInfo)

                setUser(userInfo);

            }
            setIsSigningIn(false);

        } catch {
            throw new Error("Não foi possível autenticar");

        } finally {
            setIsSigningIn(false);
        }
    }

    async function signInFacebook() {
        try {
            setIsSigningInFace(true);
            await Facebook.initializeAsync("281646310697153");
            const userFace = await Facebook.logInWithReadPermissionsAsync({
              permissions: ["public_profile", "email"],
            });
            console.log('FACEBOOK' , userFace)
            if (userFace.type === "success") {
              // Get the user's name using Facebook's Graph API
              const response = await fetch(
                `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${userFace.token}`
              );
              const data = await response.json() as UserFacebook;
              console.log('USUARIO', data);
              if (data){
                const usuario = {} as User;
                usuario.email = data.email
                usuario.name = data.name
                usuario.picture = data.picture.data.url
                await AsyncStorage.setItem('@Auth:user', JSON.stringify(usuario));
                setUser(usuario);
              }
              
            } else {
                // type === 'cancel'
            }
            setIsSigningInFace(false);
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
        finally {
            setIsSigningInFace(false);
        }

    }

    async function signOut() {

        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    useEffect(() =>{
        async function loadUserStorageData() {
            const storageUser = await AsyncStorage.getItem('@Auth:user');
         //   const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);
           
             if(storageUser ) {
            //     api_git.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
                 setUser(JSON.parse(storageUser));
             }
            setIsSigningIn(false);
        }
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            userFacebook,
            isSigningIn,
            isSigningInFace,
            signInGoogle,
            signInFacebook,
            signOut
        }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}

