import React, { useContext } from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTS } from '../../theme';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import  IlustrationImg  from '../../assets/illustration.png';

import { Background } from '../../components/Background';

import { useAuth } from '../../hooks/AuthContext';


export function Login(){

const { user, isSigningIn } = useAuth();



async function handleSignIn() {
    try {
     //  await signIn();
    } catch (error) {
     //  Alert.alert(); 
    }
}

    return(
    <Background>
        <View style={ styles.container }>
            <Image source={ IlustrationImg } style={ styles.image }
            resizeMode="stretch"/>

        <View style={ styles.content }>
            <Text style={ styles.title }>Inscreva seu {`\n`}
            TIME de forma {`\n`}
        fácil!
            </Text>

            <Text style={ styles.subtitle }>
            Crie sua liga para disputar  {`\n`}
            com seus amigos
            </Text>
            {
                isSigningIn ? <ActivityIndicator color={COLORS.primary} />
                :
                <ButtonIcon
                title=" Entrar com GitHub"
                onPress={handleSignIn}
                /> 
            }
            </View>
        </View>
    </ Background>
    );
}