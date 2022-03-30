import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SignInContent } from '../../components/SignInContent';
import { useAuth } from '../../hooks/auth';
import { RFValue } from 'react-native-responsive-fontsize';

import IllustrationSvg from '../../assets/illustration.svg';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import { BtnSocialLogin } from '../../components/BtnSocialLogin';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper
} from './styles';
import { View } from 'moti';

interface AuthResponse {
  type: string;
  params: {
    access_token: string;
  }
}

interface LoginProps {
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
  }

  return (
    <Container>

      <Header>
        <TitleWrapper>
          <IllustrationSvg
            width={RFValue(180)}
            height={RFValue(180)}
          />
          <Title>
            Controle suas  {'\n'}
            finanças de forma {'\n'}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <BtnSocialLogin
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={() => console.log('Google')}
          />

          <BtnSocialLogin
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={() => console.log('Apple')}
          />

        </FooterWrapper>

      </Footer>

      {/* <View style={styles.textFields}>
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
          onChangeText={password => setPassword(password)} 
        /> 
        </View> */}


    </Container>
  );

}