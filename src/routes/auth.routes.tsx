import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../theme';
import { NewLink } from '../pages/NewLink/';
import { Home } from '../pages/Home/';
import { SupportScreen } from '../pages/Support/';
import { Profile } from '../pages/Profile';
import { Perfil } from '../pages/Perfil';
import { AppointmentDetail } from '../pages/AppointmentDetail';
import { AppointmentCreate } from '../pages/AppointmentCreate';
import { Following } from '../pages/Following';
import { Todo } from '../pages/Todo';
import { Dashboard } from '../pages/Dashboard';
import { Register } from '../pages/Register';
import { CategorySelect } from '../pages/CategorySelect';

import Tab from '../routes/tab.routes';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: COLORS.secondary100
                }
            }}
        >
            <Screen
               name="TabHome"
               component={Tab}
           />
             <Screen
                name="CategorySelect"
                component={CategorySelect}
            />
            <Screen
                name="Dashboard"
                component={Dashboard}
            />
            <Screen
                name="Todo"
                component={Todo}
            />
            <Screen
                name="Profile"
                component={Profile}
            />
            <Screen
                name="Perfil"
                component={Perfil}
            />

            <Screen
                name="Following"
                component={Following}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Support"
                component={SupportScreen}
            />
            <Screen
                name="NewLink"
                component={NewLink}
            />

            <Screen
                name="AppointmentDetail"
                component={AppointmentDetail}
            />
            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />

        </Navigator>
    )
}