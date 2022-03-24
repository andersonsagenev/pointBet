import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../../components/Avatar';
import { useAuth } from '../../hooks/auth';

export function Perfil(){
    const { user } = useAuth();
    return(
        <View style={styles.container}>

        <Avatar urlImage={user?.picture} />

            <View>
             <View style={styles.user}>
                <Text style={styles.greeting }>
                Olá
                </Text>
                <Text style={styles.username }>
                {user?.given_name}
                </Text>
             </View>
             <Text style={styles.message }>
                Hoje e dia de Vitória
                </Text>

            </View>

        </View>
    );
}