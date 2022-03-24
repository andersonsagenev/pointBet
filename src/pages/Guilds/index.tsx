import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { Guild } from '../../components/Guild';
import { GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { api } from '../../services/api';


type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {

    // const [ guilds, setGuilds ] = useState<GuildProps[]>([]);
     const [ loading, setLoading ] = useState(true);

     async function fetchGuilds() {
        // const response = await api.get('users/@me/guilds');
         //setGuilds(response.data);
         setLoading(false);
     }

     useEffect(() => {
        fetchGuilds();
     },[]);


    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
    ];
    return (
        <View style={styles.container}>
            <Header
                title="Agendar partida"

            />
            {
                loading ? <Load /> :
                 <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                style={styles.guilds}
                />
            }
           
        </View>
    );
}
