import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 104,
      paddingTop: getStatusBarHeight(),
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
        flex: 1,
        fontFamily: FONTS.title700,
        textAlign: 'center',
        color: '#000',
        fontSize: 20
    },
})