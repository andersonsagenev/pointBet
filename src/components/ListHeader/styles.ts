import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
export const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      // justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 20
    },
    title: {
        fontFamily: FONTS.title500,
        color: COLORS.black,
        fontSize: 18
    },
    subtitle: {
         fontFamily: FONTS.text400,
         color: COLORS.black,
         fontSize: 17,
         marginLeft: 10
    },
  
   
})