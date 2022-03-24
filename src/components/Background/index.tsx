import React, { ReactNode } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { COLORS } from '../../theme';

type Props = {
    children: ReactNode;
}

export function Background( {children}: Props) {
    const { secondary80, secondary100 } = COLORS;

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
        { children }
        </LinearGradient>
    )
}