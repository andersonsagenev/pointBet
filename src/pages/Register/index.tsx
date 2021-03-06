import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../../pages/CategorySelect/';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/AuthContext';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { 
    Container, 
    Form, 
    Header, 
    Title, 
    Fields, 
    TransactionsType
 } from './styles';

// interface FormData {
//     name: string;
//     amount: number;
// }

export type FormData = {
    [name: string]: any;
}

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatorio'),
    amount: Yup.number()
    .typeError('Informe um valor númerico')
    .positive("O valor não pode ser negativo")
    .required('O valor é obrigatório')
}).required()

export function Register(props: any) {
    const { user } = useAuth();
    const dataKey = `@gofinance:transactions_user:${user.id}`;
    const [TransactionType, setTransactionType] = useState('');
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });
    const [openModal, setOpenModal] = useState(false);
    const {  
        control, 
        handleSubmit,
        reset,
        formState: { errors} 
    } = useForm({ resolver: yupResolver(schema)});
    const navigation = useNavigation()

    function handleTransactionTypeSelect(type: 'positive' | 'negative') {
        setTransactionType(type);
    }
    function handleOpenModal() {
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
    }

    async function handleRegister(form: FormData) {
        
        if(! TransactionType ){
            return Alert.alert('Selecione o tipo de transação');
        }
        if(category.key === 'category' ){
            return Alert.alert('Selecione a categoria');
        }
        const newTransaction = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            type: TransactionType,
            category: category.key,
            date: new Date()
        }
        console.log('formulario', newTransaction)
        try {
            // recupera os dados salvos
            const data = await AsyncStorage.getItem(dataKey);
            // converte para Json
            const currentData = data ? JSON.parse(data) : [];

            const dataFormatted = [
                ...currentData,
                newTransaction
            ];
            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

            reset();
            setTransactionType('');
            setCategory({
                key: 'category',
                name: 'Categoria',
            });

            props.navigation.navigate('Listagem');

            
        } catch (error) {
                console.log(error)
                Alert.alert('Não foi possível salvar')
        }
    }

    // useEffect(() => {
     
    //     async function removeAll(){
    //       await AsyncStorage.removeItem(dataKey)
    //     }
     
    //     removeAll()
    //    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm 
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.name && errors.name.message} 
                        />
                        <InputForm 
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType="numeric" 
                            error={errors.amount && errors.amount.message}
                        />

                        <TransactionsType>
                            <TransactionTypeButton
                                type="up"
                                title="income"
                                onPress={() => handleTransactionTypeSelect('positive')}
                                isActive={TransactionType === 'positive'}
                            />
                            <TransactionTypeButton
                                type="down"
                                title="Outcome"
                                onPress={() => handleTransactionTypeSelect('negative')}
                                isActive={TransactionType === 'negative'}
                            />
                        </TransactionsType>

                        <CategorySelectButton title={category.name} onPress={handleOpenModal} />

                    </Fields>
                    <Button 
                        title="Enviar" 
                        onPress={handleSubmit(handleRegister)}
                    />
                </Form>
                <Modal visible={openModal}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseModal}
                    />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    )
}

export default Register;