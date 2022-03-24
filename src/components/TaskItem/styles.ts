
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    infoContainer:{
      flex: 1,
    },
    taskButton: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 12,
        marginBottom: 4,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
      },
      taskMarker: {
        height: 16,
        width: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#B2B2B2',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
      },
      taskText: {
        color: '#666',
        fontFamily: 'Inter-Medium'
      },
      taskMarkerDone: {
        height: 16,
        width: 16,
        borderRadius: 4,
        backgroundColor: '#1DB863',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
      },
      taskTextDone: {
        color: '#1DB863',
        textDecorationLine: 'line-through',
        fontFamily: 'Inter-Medium'
      },
      iconsContainer: {
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 24
      },
      iconsDevider: {
        width: 1 ,
        height: 24,
        backgroundColor: 'rgba(196, 106, 196, 0.24)',
        marginHorizontal: 12
      }
})

