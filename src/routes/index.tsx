import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../hooks/auth'
import { AuthRoutes } from './auth.routes';
import { SignIn } from '../pages/SignIn';
import { Profile } from '../pages/Profile';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {

    const { user, userFacebook } = useAuth();

    return (
        <NavigationContainer>

            <SignIn />
           
            {/* {
               user ? <AuthRoutes /> : <SignIn />
            } */}

            {/* <Navigator headerMode="none">
                <Screen
                    name="SignIn"
                    component={SignIn}
                />
                <Screen
                    name="Profile"
                    component={Profile}
                />
            </Navigator> */}
        </NavigationContainer>
    )
}