import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
export const styles = StyleSheet.create({
    container: {
      width: 104,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
       paddingVertical: 20
    },
    title: {
        fontFamily: FONTS.title500,
        color: COLORS.heading,
        fontSize: 15,
        marginTop: 15
    },
    check: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 12,
        height: 12,
        backgroundColor: COLORS.secondary100,
        borderBottomColor: COLORS.secondary50,
        borderWidth: 2,
        borderRadius: 3

    },
    checked: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 10,
        height: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 3
    },

   
})