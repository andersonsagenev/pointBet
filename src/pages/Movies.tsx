import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from '../components/Menu';

const MoviesScreen = () => {
    return (
       
      <SafeAreaView style={styles.container}>

        <Menu title="Meus Filmes"/>

        <View style={styles.searchContainer}>

            <TextInput  style={styles.search} placeholder="Ex Vingadores"/>

            <TouchableOpacity style={styles.buttonSearch}>
                 <Feather name="search" size={30} color="#FFF" />
            </TouchableOpacity>

        </View>
       
       
            {/* <Text style={styles.title}>Movies Screen</Text> */}
                {/* <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
                /> */}
           
           
      </SafeAreaView>
       
    );
};

export default MoviesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132742',
   // paddingHorizontal: 4
  },
searchContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 14,
    marginBottom: 8
    

},
search: {
    backgroundColor: 'rgba(255,255,255, 0.4)',
    width: '80%',
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 15,
    fontSize: 18,
    color: '#FFF'
    
},
buttonSearch: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
}
});
