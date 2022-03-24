import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
      fontFamily: FONTS.title500,
      fontSize: 24,
      color: COLORS.heading,
      marginRight: 6
  },
  username: {
      fontFamily: FONTS.title700,
      fontSize: 24,
      color: COLORS.heading
  },
  message: {
      fontFamily: FONTS.text400,
      color: COLORS.highlight
  }
});