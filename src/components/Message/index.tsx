import React from 'react';
import { View, Text } from 'react-native';
import UserPhoto from '../UserPhoto';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';

import { styles } from './styles';

import { MotiView } from 'moti';

//imageUri="https://github.com/andersonsagenev.png"
// from={{ opacity: 0, translateY: -50 }}
// animate={{ opacity: 1, translateY: 0}}
// transition={{ type: 'timing', duration: 700}} 

export type MessageProps = {
    id: string,
    text: string,
    user: {
        name: string,
        avatar_url: string,
    }
}
type Props = {
    data: MessageProps;
}

export function Message( { data }: Props) {
    return (
        <View 
        style={styles.container}
       
        >
            <Text style={styles.message}>
                { data.text }
            </Text>
            <View style={styles.footer}>
                <UserPhoto
                    imageUri={data.user.avatar_url}
                    sizes="SMALL"
                />
                <Text style={styles.userName}>
                    { data.user.name }
                </Text>
            </View>
        </View>
    )
}

export default Message;