import React, { useState } from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { RFValue } from 'react-native-responsive-fontsize';

import IllustrationSvg from '../../assets/illustration.svg';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import FacebookSvg from '../../assets/facebook.svg';
import { BtnSocialLogin } from '../../components/BtnSocialLogin';
import { Alert, Platform } from 'react-native';
import Load from '../../components/Load';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper
} from './styles';

interface AuthResponse {
  type: string;
  params: {
    access_token: string;
  }
}

// interface LoginProps {
//   isLoading: boolean,
//   errorMessage: string
// }

export function SignIn() {

  const { signInGoogle, signInFacebook, signInApple } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignInGoogle() {
    try {
      setIsLoading(true);
      return await signInGoogle();
    } catch (error) {
      Alert.alert('Não foi possível autenticar com Google');
      setIsLoading(false);
    }
  }

  async function handleSignInFacebook() {
    try {
      setIsLoading(true);
      return await signInFacebook();
    } catch (error) {
      Alert.alert('Não foi possível autenticar com Facebook');
      setIsLoading(false);
    }
  }

  async function handleSignInApple() {
    try {
      setIsLoading(true);
      return await signInApple();
    } catch (error) {
      Alert.alert('Não foi possível autenticar com Apple');
      setIsLoading(false);
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
            onPress={handleSignInGoogle}
          />
          <BtnSocialLogin
            title="Entrar com Facebook"
            svg={FacebookSvg}
            onPress={handleSignInFacebook}
          />
          {
            Platform.OS === "ios" &&
            <BtnSocialLogin
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSignInApple}
            />
          }


        </FooterWrapper>

        {
          isLoading && <Load />
        }

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