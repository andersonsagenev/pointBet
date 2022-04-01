import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';
import { SignIn } from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    
    const theme = useTheme();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.primary
                }
            }}
        >
            <Screen
               name="SignIn"
               component={SignIn}
           />
        

        </Navigator>
    )
}