import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
      fontFamily: FONTS.title700,
      color: COLORS.heading,
      fontSize: 18,
  },
  status: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  nameStatus: {
      fontFamily: FONTS.text400,
      color: COLORS.highlight,
      fontSize: 13
  },
  bulletStatus: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 9
  }
});