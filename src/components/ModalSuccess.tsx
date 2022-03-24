import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native';

const ModalSuccess: React.FC = ({ onClose }: any) => {

    return (
        <View style={styles.modalBackGround}>
            <View style={styles.modalContainer}>

                <View style={{ alignItems: 'center' }}>
                      <View style={styles.header}>
                        <TouchableOpacity onPress={onClose}>
                            <Image
                                source={{ uri: '../../assets/x.png' }}
                                style={{ height: 30, width: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={{ uri: '../../assets/success.png'}}
                        style={{ height: 100, width: 100, marginVertical: 10 }}
                    />
                </View>

                <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
                    Concluído com sucesso!
                </Text>

              
            </View>
        </View>
    )

}

export default ModalSuccess;

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '70%',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});