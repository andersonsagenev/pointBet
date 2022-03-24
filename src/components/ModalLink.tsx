import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Share } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Clipboard from 'expo-clipboard';


const ModalLink: React.FC = ( { onClose, data } : any) => {

    function copyLink() {
        Clipboard.setString(data.link)
    }

   async function handleShare() {
        try {
            const result = await Share.share({
                message: `Link: ${data.link}`
            });
            if( result.action == Share.sharedAction) {
                if(result.activityType){
                    console.log('ActivitType')
                }else {
                    // compartilhou
                    console.log('compartilhado com sucesso!')
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Modal Fechado')
            }
        } catch (error) {
            console.log(error.message) 
        }
    }

    return (
        <View style={styles.ModalContainer}>

        <TouchableWithoutFeedback onPress={ onClose }>
        
         <View style={ {flex:1} }></View>

         </TouchableWithoutFeedback>
       
        <View style={styles.Container}>
            
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={onClose}>
                    <Feather name="x"
                        color="#212743"
                        size={30} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleShare} >
                    <Feather name="share"
                        color="#212743"
                        size={30} />
                </TouchableOpacity>
            </View>

            <View style={styles.LinkArea}>
                <Text style={styles.TitleLinkArea}>Link encurtado</Text>
                <Text numberOfLines={1} 
                      style={styles.LongUrl}>
                        {data.long_url}
                </Text>

                <TouchableOpacity activeOpacity={1} 
                                  style={styles.shortLinkArea}
                                  onPress={copyLink}>
                    <Text numberOfLines={1} style={styles.InputLink}>{data.link}</Text>
                    <TouchableOpacity
                        onPress={copyLink}>
                        <Feather name="copy"
                            color="#FFF"
                            size={25} />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

        </View>
    
        </View>
    )
}

export default ModalLink;

const styles = StyleSheet.create({
    ModalContainer: {
        flex: 1,
    },
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 15
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    LinkArea: {
        flex: 1,
        justifyContent: 'center'
    },
    TitleLinkArea: {
        fontSize: 33,
        fontWeight: 'bold',
        color: "#1ccbac"
    },
    LongUrl: {
        fontSize: 17,
        color: '#a7a7a7',
        marginBottom: 30
    },
    shortLinkArea: {
        height: 45,
        width: '100%',
        backgroundColor: '#172742',
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    ButtonCopy: {

        //   alignItems: 'center', 
        //   justifyContent: 'center'
    },
    InputLink: {
        color: '#FFF',
        width: '90%',
        fontSize: 16
    },
});