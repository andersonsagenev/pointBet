import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    buttonMenu: {
      // top: Platform.OS === 'ios' ? 60 : 10,
      // position: 'absolute',
      // justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 14
    },
    button: {
      height: 70,
      alignItems: 'center',
      flexDirection: 'row'
    },
    title: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 14
    }
  });