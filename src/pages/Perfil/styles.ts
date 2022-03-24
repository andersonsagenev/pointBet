import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
      userInfoSection: {
        marginTop: 25,
        justifyContent: 'center', 
        alignItems: 'center'
      },
      userImg: {
        height: 120,
        width: 120,
        borderRadius: 75,
      },
      userName: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
      },
      aboutUser: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 10,
        marginTop: 10,
      },
      userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
      },
      userInfoItem: {
        justifyContent: 'center',
      },
      userInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
      },
      userInfoSubTitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
      },
      userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
      },
      userBtn: {
        borderColor: COLORS.GRAY_PRIMARY,
        borderWidth: 2,
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginHorizontal: 10,
       

      },
      userBtnTxt: {
        color: '#2e64e5',
      },
     
     

});