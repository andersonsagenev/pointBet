import { COLORS } from './../../theme/colors';
import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontFamily: FONTS.BOLD,
        fontSize: 15,
        textAlign: 'center'
    },
    icon: {
        marginRight: 12,
        color: COLORS.FACEBOOK
    }
})