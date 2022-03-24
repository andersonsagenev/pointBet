import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import { BtnColor } from '../BtnColor'
import { COLORS } from '../../theme';

import { useAuth } from '../../hooks/auth';

// type Props = TouchableOpacityProps & {
//     title: string;
//     color: ColorValue;
//     backgroundColor: ColorValue
// }

export function SigInBox( ) {
    const { signIn, isSigningIn } = useAuth();
    return (
        <View style={styles.container} 
       >

           <BtnColor
            title='ENTRAR COM GITHUB'
            color={COLORS.BLACK_PRIMARY}
            backgroundColor={COLORS.YELLOW}
            icon="github"
            onPress={signIn}
            isLoading={isSigningIn}
             />
        
        </View>

    )
}