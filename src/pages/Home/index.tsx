import React, { useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Perfil } from '../../components/Perfil';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListHeader } from '../../components/ListHeader';
import { Load } from '../../components/Load';
import { ListDivider } from '../../components/ListDivider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENT } from '../../config/database';


export function Home(){
    const [category, setCategory ] = useState('');
    const [appointments, setAppointments ] = useState<AppointmentProps[]>([]);
    const [loading, setLoading ] = useState(true);
    const navigation = useNavigation();

    // const appointments = [
    //     {
    //         id: '1',
    //         guild: {
    //             id: '1',
    //             name: 'Lendarios',
    //             icon: null,
    //             owner: true
    //         },
    //         category: '1',
    //         date: '22/06 as 20:40h',
    //         description: 'E hoje que vamos chegar '
    //     },
    //     {
    //         id: '2',
    //         guild: {
    //             id: '2',
    //             name: 'Variados',
    //             icon: null,
    //             owner: false
    //         },
    //         category: '1',
    //         date: '22/06 as 20:40h',
    //         description: 'E hoje que vamos chegar '
    //     },
    //     {
    //         id: '3',
    //         guild: {
    //             id: '2',
    //             name: 'Variados',
    //             icon: null,
    //             owner: false
    //         },
    //         category: '1',
    //         date: '22/06 as 20:40h',
    //         description: 'E hoje que vamos chegar '
    //     },
    //     {
    //         id: '4',
    //         guild: {
    //             id: '2',
    //             name: 'Variados',
    //             icon: null,
    //             owner: false
    //         },
    //         category: '1',
    //         date: '22/06 as 20:40h',
    //         description: 'E hoje que vamos chegar '
    //     },
    //     {
    //         id: '5',
    //         guild: {
    //             id: '2',
    //             name: 'Variados',
    //             icon: null,
    //             owner: false
    //         },
    //         category: '1',
    //         date: '22/06 as 20:40h',
    //         description: 'E hoje que vamos chegar '
    //     },
    //     {
    //         id: '6',
    //         guild: {
    //             id: '2',
    //             name: 'Variados',
    //             icon: null,
    //             owner: false
    //         },
    //         category: '1',
    //         date: '22/06 as 20:40h',
    //         description: 'E hoje que vamos chegar '
    //     },
    // ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetail(guildSelected: AppointmentProps){
        navigation.navigate('AppointmentDetail', { guildSelected });
    }
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    async function loadleAppointments() {
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
        const response: AppointmentProps[] = storage ? JSON.parse(storage) : [];

        if(category){
            setAppointments(response.filter(item => item.category === category))
        } else {
            setAppointments(response)
        }
        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadleAppointments();
    }, [category]));

    return(
        <Background style={{flex:1}}>
            <View style={styles.header}>
                <Perfil />
                <ButtonAdd 
                onPress={handleAppointmentCreate}/>
            </View>
           
            <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            {
                loading ? <Load /> : 
            <>
            <ListHeader
                title="Partidas agendadas"
                subtitle={`Total ${appointments.length}`}
            />
            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment 
                        data={item}
                        onPress={(item) => handleAppointmentDetail(item)} />
                    )}
                ItemSeparatorComponent={ () => <ListDivider />}
                contentContainerStyle={ {paddingBottom: 69}}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />
            </>
            }
          
           


        </Background>
    );
}