import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  profile: {
    width: '100%',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    paddingBottom: getBottomSpace() + 20,
    paddingHorizontal: 44,
  },
  name: {
    fontFamily: FONTS.BOLD,
    color: COLORS.TEXT,
    fontSize: 32,
    marginTop: 7
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
  emailText: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.SECONDARY,
    marginLeft: 5,
    fontSize: 14,
  },
  about: {
    width: '100%',
    marginVertical: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.NOTE,
    marginBottom: 7,
    fontSize: 14,
  },
  text: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.TEXT,
    fontSize: 18
  },
  locale: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  localeText: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.NOTE,
    marginLeft: 5,
    fontSize: 14,
  },
  info: {
    alignItems: 'center'
  },
});