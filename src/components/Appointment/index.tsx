import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';
import { GuildIcon } from '../../components/GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { COLORS } from '../../theme';


export type GuildProps = {
    id: string,
    name: string,
    icon: string,
    owner: boolean
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string

}

type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function Appointment( {data, ...rest} : Props){
    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on, secondary50, secondary70 } = COLORS;

    return(
        <RectButton {...rest}>
        <View style={styles.container}>
            <LinearGradient 
                style={styles.guildContainer}
                colors={[secondary50, secondary70]}>
                 <GuildIcon guildId={data.guild.id} iconId={ data.guild?.icon } />
            </LinearGradient>

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        { data.guild.name }
                    </Text>
                    <Text style={styles.category}>
                        { category ? category.title : 'sem titulo' }
                    </Text>
                </View>
                  <View style={styles.footer}>
                <View style={styles.dateInfo}>
                    <CalendarSvg />
                    <Text style={styles.date}> 
                        {data.date}
                    </Text>
                </View>

                <View  style={styles.playersInfo}>
                    <PlayerSvg fill={ owner ? primary : on} />
                        <Text style={[
                            styles.player,
                            { color: owner ? primary : on } 
                        ]}>
                        { owner ? 'Anfitriao' : 'Visitante' }
                        </Text>
                </View>

            </View>
            </View>

          
        </View>
        </RectButton>
    );
}