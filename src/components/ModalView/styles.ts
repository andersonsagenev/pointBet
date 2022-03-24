import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
    },
    overlay:{
        flex: 1,
         backgroundColor: COLORS.secondary30,
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: COLORS.secondary30,
        alignSelf: 'center',
        marginTop: 13
       
    }
})