import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/Ionicons';

import { Dashboard } from '../pages/Dashboard';
import { Register } from '../pages/Register';
import { Resume } from '../pages/Resume';

const TabRoutes = createBottomTabNavigator();

export function Tab() {
    const theme = useTheme();
    return (
        <TabRoutes.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary_finance,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                }
            })
            }
        >
            <TabRoutes.Screen
                name="Listagem"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name="format-list-bulleted"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <TabRoutes.Screen 
                name="Register" 
                component={Register} 
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name="attach-money"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <TabRoutes.Screen 
                name="Resume" 
                component={Resume} 
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name="pie-chart"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

        </TabRoutes.Navigator>
    )
}

export default Tab;