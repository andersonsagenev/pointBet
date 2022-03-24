import { COLORS } from './../../theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    containerProfile: {
        width: 150,
        height: 150,
        backgroundColor: COLORS.WHITE,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 8
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 25,
        borderWidth: 7,
        borderColor: COLORS.BLACK_PRIMARY
    },
})