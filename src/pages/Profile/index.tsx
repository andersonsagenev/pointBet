import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { COLORS } from '../../theme';
import { useAuth } from '../../hooks/AuthContext';
import { BtnColor } from '../../components/BtnColor';

export function Profile() {

  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  console.log('usuario profile', user)

  async function handleLogout() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <View style={styles.profile}>

        <Avatar urlImage={user?.picture} />

          <Text style={styles.name}>
            {user?.name}
          </Text>

          <View style={styles.email}>
            <Feather name="mail" color={COLORS.SECONDARY} size={18} />
            <Text style={styles.emailText}>
              {user?.email}
            </Text>
          </View>
        </View>

        <View style={styles.about}>
          <View style={styles.info}>
            <Feather
              name="user"
              size={34}
              color={COLORS.NOTE}
            />
            <Text style={styles.label}>
              Nome
            </Text>
            <Text style={styles.text}>
              {user?.given_name}
            </Text>
          </View>

          <View style={styles.info}>
            <Feather
              name="heart"
              size={34}
              color={COLORS.NOTE}
            />
            <Text style={styles.label}>
              Sobrenome
            </Text>
            <Text style={styles.text}>
              {user?.family_name}
            </Text>
          </View>
        </View>

        <View style={styles.locale}>
          <Feather
            name="map-pin"
            size={18}
            color={COLORS.NOTE}
          />

          <Text style={styles.localeText}>
            Localidade do perfil do usuário: {user?.locale}
          </Text>
        </View>

        <BtnColor
            title='DESCONECTAR'
            color={COLORS.WHITE}
            backgroundColor={COLORS.PINK}
            icon="poweroff"
            onPress={handleLogout}
        />
      </View>
    </View>
  );
}

export default Profile;