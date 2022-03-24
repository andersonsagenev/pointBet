import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
     banner: {
        width: '100%',
        height: 234,
    },
     bannerContent: {
        flex: 1,
        height: 234,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30

    },
    title: {
        fontFamily: FONTS.title700,
        color: COLORS.heading,
        fontSize: 28
    },
    subtitle: {
        fontFamily: FONTS.text400,
        color: COLORS.heading,
        fontSize: 13,
        lineHeight: 21
    },
    members: {
        marginLeft: 24,
        marginTop: 24
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
    }
  
})