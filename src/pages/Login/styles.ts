import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.secondary100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
      width: '100%',
      height: 360
  },
  content: {
      marginTop: -40,
      paddingHorizontal: 60,
      marginBottom: 20
  },
  title: {
       color: COLORS.heading,
      textAlign: 'center',
      fontSize: 32, 
      marginBottom: 16,
      fontFamily: FONTS.title700,
      lineHeight: 40
  },
  subtitle: {
      color: COLORS.heading,
      textAlign: 'center',
      fontSize: 15,
      marginBottom: 50
  }
});