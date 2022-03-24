import React from 'react';
import { Image, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { CDN_IMAGE } from '../../config/discordAuth';
import DiscordSvg from '../../assets/discord.svg';

import { styles } from './styles';

type Props = {
    guildId: string;
    iconId: string;
}


export function GuildIcon({ guildId, iconId }: Props) {
    // const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBV_WbiPvqRSPgpNSCrLwXE4li3bqHoEQMg&usqp=CAU'
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
    return (
        <View style={styles.container}>
            {
                iconId ?
                    <Image style={styles.image}
                        source={{ uri }}
                        resizeMode="cover"
                    />
                    :
                    <DiscordSvg width={40} height={40} />
            }
        </View>

    );
}