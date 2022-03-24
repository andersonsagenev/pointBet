import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

type Props =  {
    title: string;
    action?: ReactNode;
}

export function HeaderBlubb( { title, action } : Props) {
    const { light, white, black } = COLORS;
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }
   
    return (
          <LinearGradient 
            style={ styles.container }
            colors={[white, light]}
          >
            <BorderlessButton onPress={handleGoBack}>
                 <Feather
                    name="arrow-left"
                    size={24}
                    color={black}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                { title }
            </Text>
                {
                    action 
                    ?
                    <View>
                          {action}  
                    </View>
                    :
                    <View style={{width: 24}}/>
                }
               
        </LinearGradient>          
    )
}