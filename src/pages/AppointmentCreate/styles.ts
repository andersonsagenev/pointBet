import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontFamily: FONTS.title700,
        color: COLORS.heading,
        fontSize: 18
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        flexDirection: 'row',
        width: '100%',
        height: 68,
        borderColor: COLORS.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    selectBody: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 64,
        height: 64,
        backgroundColor: COLORS.secondary40,
        borderColor: COLORS.secondary50,
        borderWidth: 1,
        borderRadius: 8
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        marginRight: 4,
        marginLeft: 4,
        fontSize: 15,
        fontFamily: FONTS.text500,
        color: COLORS.highlight
    },
    caracterLimit: {
      fontFamily: FONTS.text400,
      fontSize: 13,
      color: COLORS.highlight  
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56
    }


   
})