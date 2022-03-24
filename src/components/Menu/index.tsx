import React, { ReactNode } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from  '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import StatusBarPage from '../StatusBarPage';
import { styles } from './styles';

type Props =  {
  title: string;
  action?: ReactNode;
}

function Menu({ title, action } : Props) {

   const navigation = useNavigation();
  return (

    <View style={styles.buttonMenu}>
      <TouchableOpacity style={styles.button}
        onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}>
        <Feather name="menu" size={36} color="#FFF" />
      </TouchableOpacity>
      
    <Text style={styles.title}>{title}</Text>
    
    </View>
    )
}

export default Menu;