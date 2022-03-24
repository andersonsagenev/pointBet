import { Platform, StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Platform.OS === 'ios' ? 35 : 15
    },
    logo: {
      width: 150,
      height: 150
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FFF'
    },
    containerInput: {
      // marginTop: Platform.OS === 'ios' ? 35 : 15,
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      borderRadius: 7,
      marginTop: 15,
      paddingLeft: 15,
      paddingRight: 15
  
  
    },
    containerContent: {
      marginTop: Platform.OS === 'ios' ? 35+'%' : 15+'%',
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      color: '#FFF',
      paddingTop: 10
    },
    boxIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
      width: '11%',
      height: 50,
      backgroundColor: 'rgba(255,255,255, 0.15)',
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7
    },
    textInput: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      height: 50,
      padding: 10,
      backgroundColor: 'rgba(255,255,255, 0.15)',
      borderTopRightRadius: 7,
      borderBottomRightRadius: 7,
      fontSize: 17,
      color: '#FFF'
    },
    ButtonLink: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 45,
      backgroundColor: '#FFF',
      marginTop: 15,
      borderRadius: 7,
      marginBottom: 15,
      marginHorizontal: 15,
  
    },
    ButtonText: {
      fontSize: 18,
      color: '#000',
    }
  });