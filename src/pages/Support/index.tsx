import React from 'react';
import { View, Text, Button } from 'react-native';
import Menu from '../../components/Menu';
import { styles } from './styles';

export function SupportScreen() {
    return (
      <View style={styles.container}>
        <Text>Support Screen</Text>
        <Menu title="Support"/>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default SupportScreen;


