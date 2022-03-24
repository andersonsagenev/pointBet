import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: getStatusBarHeight() + 58,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: .3
  },
  welcome: {
    width: '100%',
  },
  title: {
    fontFamily: FONTS.BOLD,
    color: COLORS.TEXT,
    fontSize: 32,
  },
  subtitle: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.TEXT,
    fontSize: 14,
    marginTop: -7
  },
});