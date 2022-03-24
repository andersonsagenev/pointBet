import { RectButton, RectButtonProps } from  'react-native-gesture-handler';
import React from 'react';
import { ColorValue, Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';



type Props = TouchableOpacityProps & {
    title: string;
    color: ColorValue;
    backgroundColor: ColorValue;
    icon?: React.ComponentProps<typeof AntDesign>['name'];
    isLoading?: boolean
}

export function BtnColor( { title, color, backgroundColor, isLoading= false, icon, ...rest } : Props ) {
    return (
        <TouchableOpacity style={ [styles.container, { backgroundColor }]} 
        activeOpacity={0.7}
        disabled={isLoading}
        {...rest}>
            {
                isLoading ?

                 <ActivityIndicator color={color} />
                 :
                 <>
                 <AntDesign name={icon} size={24} style={styles.icon} />
                   <Text style={ [styles.title, { color }]}>
                     { title }
                   </Text>
                 </>
                
            }
       
        

        </TouchableOpacity>

    )
}