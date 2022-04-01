
import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';
import 'react-native-reanimated';
import { ThemeProvider } from 'styled-components';

import { AuthProvider, useAuth } from './src/hooks/AuthContext';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { isSigningIn } = useAuth();

  if (!fontsLoaded || isSigningIn) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}