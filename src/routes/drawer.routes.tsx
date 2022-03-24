import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tab from '../routes/tab.routes';
import SupportScreen from '../pages/Support';
import Profile from '../pages/Profile';

import { View } from 'react-native';
import { DrawerContent } from '../components/DrawerContent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props: any) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
}
  

const DrawerRoutes: React.FC = () => (
   
    <Drawer.Navigator 
    //screenOptions={{
      //   headerStyle: {
      //     backgroundColor: '#ffff',
      //     shadowColor: '#ffff', // iOS
      //     elevation: 0, // Android
      //   },
      //   headerTintColor: '#c2b2b2',
        
      // }}
      drawerContentOptions={{
        activeBackgroundColor: '#2ccbb9',
        activeTintColor: '#fff'
      }}
       drawerContent={ (props: any) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={Tab} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="Profile" component={Profile} 
         options={{
            title: 'Profile', 
            headerLeft: () => (
                <View style={{marginLeft: 10}}>
                  <Icon.Button
                    name="ios-menu"
                    size={25}
                    backgroundColor='#FFF'
                    color='#FFF'
                    
                  />
                </View>
            ),
            // headerStyle: {
            //   backgroundColor: '#f4511e', //Set Header color
            // },
            // headerTintColor: '#fff', //Set Header text color
            // headerTitleStyle: {
            //   fontWeight: 'bold', //Set Header text style
            // },
          }} />
    </Drawer.Navigator>
);

export default DrawerRoutes;
