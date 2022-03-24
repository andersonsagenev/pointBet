import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, ActivityIndicator } from 'react-native';
import { Platform } from 'react-native';
import StatusBarPage from '../components/StatusBarPage';
import Menu from '../components/Menu';
import { useIsFocused } from '@react-navigation/native';
import ModalLink from '../components//ModalLink'

import ListItem from '../components/ListLinkItem/ListItem';

import { getLinksSave, deleteLink } from '../utils/storeLinks';

const LinksScreen = () => {

  const isFocused = useIsFocused();

  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('pastaLinks');
      setLinks(result);
    }

    getLinks();
  }, [isFocused])

  function handleItem(item: any) {
    setData(item);
    setModalVisible(true);
    console.log(item);
  }

  async function handleDelete(id: any) {
    const result = await deleteLink(links, id);
    setLinks(result);
    console.log(id)
    console.log('Deletado', id)
  }

  return (
    <View style={styles.container}>
      <StatusBarPage
        barStyle="ligth-content"
        backgroundColor="#132742" />

      <Menu title="links"/>

      <Text style={styles.title}>
        Meus Links
      </Text>

      {
        loading && (
          <View style={styles.empty}>
            <ActivityIndicator color="#FFF" size={25} />
          </View>
        )}
      {
        !loading && links.length === 0 && (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Você não possui nenhum link :(</Text>
          </View>
        )}

      <FlatList
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} />}
        contentContainerStyle={{ paddingBottom: 22 }}
        showsVerticalScrollIndicator={false} />

      <Modal visible={modalVisible} transparent animationType='slide'>
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>


    </View>
  );
};

export default LinksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132742'
  },
  title: {
    marginTop: Platform.OS === "ios" ? 35 + '%' : 20 + '%',
    marginLeft: 20,
    fontSize: 33,
    fontWeight: 'bold',
    color: '#FFF'
  },
  empty: {
    marginTop: '15%',
    alignItems: 'center'
  },
  emptyText: {
    fontSize: 17,
    color: '#FFF'
  }
});
