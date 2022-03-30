import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  content: {
    width: '100%',
    marginTop: 24
  },
  title: {
    color: COLORS.secondary,
    fontFamily: FONTS.BOLD,
    fontSize: 32,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    color: COLORS.TEXT,
    fontSize: 15,
  },
  description: {
    fontFamily: FONTS.regular,
    color: COLORS.NOTE,
    textAlign: 'justify',
    marginTop: 24,
  }
});