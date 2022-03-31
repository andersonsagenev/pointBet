import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import api from '../services/api';
import { Keyboard } from 'react-native';

interface userData {
    email: string,
    password: string
}

interface AuthContextData {
    signed: boolean;
    user: userData | null;
    loading: boolean;
    signIn({ email, password }: userData): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<userData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@Auth:user');
            const storageToken = await AsyncStorage.getItem('@Auth:token');

            if (storageUser && storageToken) {
               // api.defaults.headers.Authorization = `Bearer ${storageToken}`;
                setUser(JSON.parse(storageUser));
                setLoading(false);
            } else {
                setLoading(false);
            }
        }
        loadStorageData();
    }, []);

    async function signIn({ email, password }: userData) {
        setLoading(true);
        try {
            // const response = await api.post('/authenticate', {
            //     email,
            //     password
            // });
            // console.log(response.data);
            // const { token, user } = response.data;

            // setUser(response.data.user);
            // api.defaults.headers['Authorization'] = `Bearer ${token}`;

            await AsyncStorage.setItem('@Auth:user', JSON.stringify(user));
           // await AsyncStorage.setItem('@Auth:token', token);

            setLoading(false);

        } catch (error) {
            console.log(error)
            alert('Ops, parece que algo deu errado');
            Keyboard.dismiss();
            setLoading(false);
        }

    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }
    //!!user
    return (
      
        <AuthContext.Provider value={{ signed: true, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}