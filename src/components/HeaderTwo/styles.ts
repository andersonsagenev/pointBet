
import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
       width: '100%',
       paddingTop: getStatusBarHeight(),
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logoutText: {
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE,
        marginRight: 20
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})