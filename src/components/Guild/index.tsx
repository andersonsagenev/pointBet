import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { BtnColor } from '../BtnColor';

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type Props =  TouchableOpacityProps & {
    data: GuildProps;
}

export function Guild( {data, ...rest }: Props){
  return (
      <View 
        style={ styles.container }
        activeOpacity={0.7}
        {...rest}
      >
      <Avatar source={{ uri: data.icon }}/>

      <View style={styles.content}>
        <View>
            <Text style={styles.title}>
                {data.name}
            </Text>

        </View>
      </View>

      <TouchableOpacity style={styles.userBtn}>
          <Text style={styles.userBtnTxt}>Remove</Text>
      </TouchableOpacity>



      {/* <Feather 
        name="chevron-right"
        color={theme.colors.black}
        size={24}
      /> */}

      

      </View>
  )
}

