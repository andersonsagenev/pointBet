import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20

    },
    title: {
        fontFamily: FONTS.title500,
        color: COLORS.black,
        fontSize: 18,
        marginBottom: 4
    },
    type: {
        fontFamily: FONTS.title700,
        color: COLORS.highlight,
        fontSize: 13,
    },
    userBtn: {
        borderColor: COLORS.champagne,
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
      },
      userBtnTxt: {
        color: COLORS.dark,
      },
   
})