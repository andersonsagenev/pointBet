import React from 'react';
import { Text, View, Button, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

interface Props { }


export function Perfil(props: Props) {
  const navigation = useNavigation()

  function handleBubbles(){
     navigation.navigate('Following');
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <Image
          style={styles.userImg}
          source={require('../../assets/pets.png')}
        />
        <Text style={styles.userName}>@anderson_ribeiro</Text>
      </View>

      <Text style={styles.aboutUser}>
        Brasileiro,mineiro,atleticano,pai do Vitor e do Theo, marido da Lorena e
        publicitário empreendedor
      </Text>

      <View style={styles.userInfoContainer}>
        <View style={styles.userInfoItem}>
          <Text style={styles.userInfoTitle}>218</Text>
          <Text style={styles.userInfoSubTitle}>Followers</Text>
        </View>
        <View style={styles.userInfoItem}>
          <Text style={styles.userInfoTitle}>175</Text>
          <Text style={styles.userInfoSubTitle}>Following</Text>
        </View>
        <View style={styles.userInfoItem}>
          <Text style={styles.userInfoTitle}>100</Text>
          <Text style={styles.userInfoSubTitle}>Bubbles</Text>
        </View>
      </View>

      <View style={styles.userBtnWrapper}>

        <TouchableOpacity style={styles.userBtn} onPress={handleBubbles}>
          <Text style={styles.userBtnTxt}>My Blubbs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userBtn} onPress={() => { }}>
          <Text style={styles.userBtnTxt}>My Collection</Text>
        </TouchableOpacity>

      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        showsVerticalScrollIndicator={false}>


        {/* { bubbles.map((item) => (
          <PostBubbles key={item.id} item={item} onDelete={() => alert('Button Clicked!')} />
        )) } */}


      </ScrollView>
    </SafeAreaView>
  );
};

export default Perfil;


