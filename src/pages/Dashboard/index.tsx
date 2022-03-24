import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { 
  Container, 
  Header, 
  Photo, 
  UserGreeting, 
  UserInfo, 
  UserName, 
  User, 
  UserWrapper, 
  Icon, 
  HighlightCards, 
  Transactions, 
  Title, 
  TransactionsList 
} from './styles';

export interface DatalistProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {

  const data: DatalistProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de Apps',
      amount: 'R$ 12.000,00',
      category: {
        id: '1',
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/04/2022'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria',
      amount: 'R$ 59,00',
      category: {
        id: '2',
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: '10/04/2022'
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel Apartamento',
      amount: 'R$ 1.200,00',
      category: {
        id: '3',
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: '13/05/2022'
    },
    {
      id: '4',
      type: 'negative',
      title: 'Compra Gas',
      amount: 'R$ 100,00',
      category: {
        id: '4',
        name: 'Compras',
        icon: 'dollar-sign'
      },
      date: '13/05/2022'
    }
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/andersonsagenev.png' }} />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Anderson</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards >
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saída"
          amount="R$ 1.259,00"
          lastTransaction="Ultima saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList 
          data={data}
          keyExtractor={ item => item.id }
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}

export default Dashboard;