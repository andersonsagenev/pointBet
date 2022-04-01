import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/AuthContext'
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {

    const { user } = useAuth();

    return (
        <NavigationContainer>
           
            {
               user.id ? <AuthRoutes /> : <AppRoutes />
            }
           
        </NavigationContainer>
    )
}