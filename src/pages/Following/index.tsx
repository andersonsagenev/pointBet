import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { Guild } from '../../components/Guild';
import { GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { HeaderBlubb } from '../../components/HeaderBlubb';
import { Load } from '../../components/Load';
import { ListHeader } from '../../components/ListHeader';



// type Props = {
//     handleGuildSelect: (guild: GuildProps) => void;
// }

export function Following() {

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
        {
            id: '6',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '7',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
        {
            id: '8',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
        {
            id: '9',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
        {
            id: '10',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
    ];
    return (
        <View style={styles.container}>
            <HeaderBlubb
                title="Following"
            />
             <ListHeader
                title="All Followers"
                subtitle='(10)'
            />
            {
                loading ? <Load /> :
                 <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => {}} />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                // ListHeaderComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 10 }}
                style={styles.guilds}
                />
            }
           
        </View>
    );
}
