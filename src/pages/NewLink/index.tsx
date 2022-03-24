import React, { useState } from 'react';
import {
  View, Text, Image, TextInput, TouchableOpacity,
  TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Modal, Animated, ActivityIndicator
} from 'react-native';
import { COLORS } from '../../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { saveLink } from '../../utils/storeLinks';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import api from '../../services/apiBitly';
import ModalLink from '../../components/ModalLink';
import ModalSuccess from '../../components/ModalSuccess';

export function NewLink() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = React.useState(false);
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  async function handleShortLink() {
    setLoading(true);
    try {
      const response = await api.post('/shorten',
        {
          long_url: input
        })
      setData(response.data);
      setModalVisible(true);

      saveLink('pastaLinks', response.data)

      Keyboard.dismiss();
      setLoading(false);
      setInput('');

      console.log(response.data);

    } catch (error) {
      alert('Ops, parece que algo deu errado');
      Keyboard.dismiss();
      setInput('');
      setLoading(false);
    }

    //setModalVisible(true);
    //setShowModal(true);
  }

  function handleShortClose() {
    setModalVisible(false);
    //setShowModal(true);
  }

  function handleModalLink() {
    alert('url: ' + input)
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={['#1ddbb9', '#132742']}
        style={{ flex: 1, justifyContent: 'center' }}>
        <StatusBarPage
          barStyle='ligth-content'
          backgroundColor="#1ddbb9" />

        <Menu title="Novo Link" />

        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'position'}>

          <View style={styles.container}>
            <Image
              source={require('../../assets/LogoLink.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.containerContent}>
            <Text style={styles.title}>App Link</Text>
            <Text style={styles.subtitle}>Cole seu link para encurtar</Text>
            <View style={styles.containerInput}>
              <View style={styles.boxIcon}>
                <Feather name="link" size={22} color="#FFF" />
              </View>
              <TextInput style={styles.textInput}
                placeholder="cole seu link aqui"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={(text) => setInput(text)}
              />

            </View>

            <TouchableOpacity
              onPress={handleShortLink}
              style={styles.ButtonLink} >
              {
                loading ? (<ActivityIndicator color='#121212' size={24} />
                ) : (
                  <Text style={styles.ButtonText}>Gerar Link</Text>
                )
              }
            </TouchableOpacity>

          </View>

        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType='slide'>
          <ModalLink onClose={() => setModalVisible(false)} data={data} />
        </Modal>

        <Modal transparent visible={showModal}>
          <ModalSuccess onClose={handleShortClose} />
        </Modal>


      </LinearGradient>
    </TouchableWithoutFeedback>

  )
}


export default NewLink;

