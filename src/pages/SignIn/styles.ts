import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Inter_100Thin } from '@expo-google-fonts/inter';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-around',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 24,
    paddingVertical: getBottomSpace() + 20
  },
  buttonSocial: {
    width: '100%'
  },
  touch :{
		width:'90%'
		,alignItems: "center"
	},
  textFields:{
		
		width:'90%',
		marginTop:5
	},
	text : {
		color:'black',
		fontSize:26,
		fontFamily : FONTS.BOLD

	},
 

});