import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { COLORS } from '../../theme';
import { Image } from 'react-native';

type Props = {
    urlImage: string | undefined;
}

export function Avatar({ urlImage } : Props) {

    const { white, champagneDark } = COLORS;

    return (
        <LinearGradient
            style={styles.container}
            colors={[white, champagneDark]}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.image}
            />

        </LinearGradient>
    );
}