import { RectButton, RectButtonProps } from  'react-native-gesture-handler';
import React from 'react';
import { Text, Image, View } from 'react-native';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../../theme';


type Props = RectButtonProps & {
    title: string;
}

export function ButtonAdd( {...rest} : RectButtonProps ) {
    return (
        <RectButton style={ styles.container} 
        { ...rest }>
           <MaterialCommunityIcons
              name="plus"
              color={COLORS.heading}
              size={24}
               />
        </RectButton>

    )
}