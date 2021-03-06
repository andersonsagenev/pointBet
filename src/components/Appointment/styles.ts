import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    content: {
        flex: 1
    },
     header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    title: {
        fontFamily: FONTS.title700,
        color: COLORS.heading,
        fontSize: 18
    },
    category: {
        fontFamily: FONTS.text400,
        color: COLORS.heading,
        fontSize: 13,
        marginRight: 24
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        fontFamily: FONTS.text500,
        color: COLORS.heading,
        fontSize: 13,
        marginLeft: 7
    },
    player: {
        fontFamily: FONTS.text500,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24
    },
    guildContainer:{
      height: 68,
      width: 64,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20  
    }
})