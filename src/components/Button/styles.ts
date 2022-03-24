import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        color: COLORS.heading,
        fontFamily: FONTS.text500,
        fontSize: 15,
        textAlign: 'center'
    }
})