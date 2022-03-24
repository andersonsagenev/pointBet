import React from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native';

import { COLORS, FONTS } from '../../theme';
import { styles } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons';

import BannerImg from '../../assets/banner.png';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Members } from '../../components/Members';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';

type Params = {
    guildSelected: AppointmentProps
}


export function AppointmentDetail() {
    const route = useRoute();
    const { guildSelected } = route.params as Params;

    

    const members = [
        {
            id: '1',
            username: 'Anderson',
            avatar_url: 'http://github.com/andersonsagenev.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Catarina',
            avatar_url: 'http://github.com/andersonsagenev.png',
            status: 'offline'
        }
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={COLORS.primary}
                        />
                    </BorderlessButton>
                }
             />

             <ImageBackground
                source={BannerImg}
                style={styles.banner}
             >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                       { guildSelected.guild.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        { guildSelected.description}
                    </Text>
                </View>
             </ImageBackground>
             <ListHeader
                title="Jogadores"
                subtitle="Total 3"
             />

             <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Members data={item} />
                )} 
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>

        </Background>
    );
}