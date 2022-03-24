import React, { useState } from 'react';
import { TouchableHighlight, View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SignInContent } from '../../components/SignInContent';
import { useAuth } from '../../hooks/auth';
import { styles } from './styles';
import { BtnColor } from '../../components/BtnColor';
import { COLORS } from '../../theme';
import BtnSocialLogin from '../../components/BtnSocialLogin/BtnSocialLogin';
// import { useDispatch } from 'react-redux';

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  }
}

type LoginProps = {
  isLoading: boolean,
  errorMessage: string
}

export function SignIn({ isLoading, errorMessage }: LoginProps) {

  const { user, signInGoogle, signInFacebook, isSigningIn, isSigningInFace } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  async function handleSignInGoogle() {
    try {
      await signInGoogle();
    } catch (error) {
      //  Alert.alert(); 
    }
  }

  async function handleSignInFacebook() {
    try {
      await signInFacebook();
    } catch (error) {
      //  Alert.alert(); 
    }
  }

  async function handleLoginAccess() {

    const credentials = {
      email,
      password
    }
    // return dispatch (loginStart(credentials))
  }

  return (
    <View style={styles.container}>

      <SignInContent />

      <TouchableHighlight style={styles.touch} onPress={() => console.log('facebook')}>
        <BtnSocialLogin Provider='facebook' Icon='facebook' />
      </TouchableHighlight>
      <TouchableHighlight style={styles.touch} onPress={handleSignInGoogle}>
        <BtnSocialLogin Provider='google' Icon='google' />
      </TouchableHighlight>

      <Text style={{ color: '#c6c6c6' }}>ou</Text>
      <View style={styles.textFields}>
        <Text style={styles.text}>
          E-mail
        </Text>
        <TextInput style={{ color: 'black' }} autoCapitalize='none' label="Email" value={email}
          onChangeText={email => setEmail(email)} />
        <Text style={styles.text}>
          Senha
        </Text>
        <TextInput label="Senha" autoCapitalize='none' secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)} />



        {/* <BtnColor
          title='ENTRAR COM GOOGLE'
          color={COLORS.WHITE}
          backgroundColor={COLORS.GOOGLE}
          icon="google"
          onPress={handleSignInGoogle}
          isLoading={isSigningIn}
        />

        <BtnColor
          title='ENTRAR COM FACEBOOK'
          color={COLORS.WHITE}
          backgroundColor={COLORS.FACEBOOK}
          icon="facebook-square"
          onPress={handleSignInFacebook}
          isLoading={isSigningInFace}
        /> */}

      </View>
    </View>
  );
     
}