import React from 'react'
import { View, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { styles } from './styles'

interface btnSocialProps {
    Provider: string
    Icon: string
}
const BtnSocialLogin = ({ Provider, Icon }: btnSocialProps) => {

    return (
        <View style={styles.container}>
            <FontAwesome name={Icon} size={36}  style={styles.icon} />

            <Text style={styles.title}>
                Continuar com {Provider}
            </Text>
        </View>)
}


export default BtnSocialLogin