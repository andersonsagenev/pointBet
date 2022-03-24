import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../../pages/CategorySelect/';
import { 
    Container, 
    Form, 
    Header, 
    Title, 
    Fields, 
    TransactionsType
 } from './styles';
 import * as Yup from 'yup';
 import { yupResolver } from '@hookform/resolvers/yup';

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
})

export function Register() {
    const [TransactionType, setTransactionType] = useState('');
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });
    const [openModal, setOpenModal] = useState(false);
    const {  
        control, 
        handleSubmit,
        formState: { errors} 
    } = useForm({ resolver: yupResolver(schema)});

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }
    function handleOpenModal() {
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
    }

    function handleRegister(form: FormData) {
        console.log('formulario', form)
        if(! TransactionType ){
            return Alert.alert('Selecione o tipo de transação');
        }
        if(category.key === 'category' ){
            return Alert.alert('Selecione a categoria');
        }
        const data = {
            name: form.name,
            amount: form.amount,
            TransactionType,
            category: category.key
        }
        console.log(data)
    }

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
                                onPress={() => handleTransactionTypeSelect('up')}
                                isActive={TransactionType === 'up'}
                            />
                            <TransactionTypeButton
                                type="down"
                                title="Outcome"
                                onPress={() => handleTransactionTypeSelect('down')}
                                isActive={TransactionType === 'down'}
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