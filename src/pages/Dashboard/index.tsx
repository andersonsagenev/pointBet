import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { Load } from '../../components/Load';
import { useAuth } from '../../hooks/AuthContext';
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
  TransactionsList,
  LogoutButton
} from './styles';

export interface DatalistProps extends TransactionCardProps {
  id: string;
}

interface HighlightDataProps {
  amount: string;
  lastTransaction: string;
}

interface HighlightData {
  entries: HighlightDataProps,
  expensives: HighlightDataProps,
  total: HighlightDataProps,
}

function getLastTransactionDate( collection: DatalistProps[], type: 'positive' | 'negative'){

  const collectionFilttered = collection
  .filter((transaction) => transaction.type === 'positive');

  if(collectionFilttered.length === 0)
  return 0;

  const lastTransactions = new Date(Math.max.apply(Math, collectionFilttered
    .map((transaction) => new Date(transaction.date).getTime())));

    // return Intl.DateTimeFormat('pt-BR', {
    //   day: '2-digit',
    //   month: '2-digit',
    //   year: '2-digit'
    // }).format(new Date(lastTransactions));

    return `${lastTransactions.getDate()} de ${lastTransactions.toLocaleString('pt-BR', { month: 'long'})}`;

}

export function Dashboard() {
  const { user, signOut } = useAuth();
  const dataKey = `@gofinance:transactions_user:${user.id}`;
  const [data, setData] = useState<DatalistProps[]>([]); // declarando estado vetor
  const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);
  const [isLoading, setIsLoading ] = useState(true);


  console.log('USUARIO', user)

  async function loadTransactionsData() {
    const storageTransactions = await AsyncStorage.getItem(dataKey);
    const transactions = storageTransactions ? JSON.parse(storageTransactions) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionFormatted: DatalistProps[] = transactions.map((item: DatalistProps) => {

      if (item.type === 'positive') {
        entriesTotal += Number(item.amount);
      } else {
        expensiveTotal += Number(item.amount);
      }
      const amount = Number(item.amount).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.date));

      return {
        id: item.id,
        amount,
        name: item.name,
        type: item.type,
        date: date,
        category: item.category
      }
    });

    setData(transactionFormatted);

    const lastTransactionsEntries = getLastTransactionDate( transactions, 'positive');
    const lastTransactionsExpensive = getLastTransactionDate( transactions, 'negative');
    const totalInterval = lastTransactionsExpensive === 0 
    ? "Não hà transaçōes"
    : `01 à ${lastTransactionsExpensive}`;

   
    const total = entriesTotal - expensiveTotal;

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastTransactionsEntries === 0
        ? "Não hà transaçōes"
        : `Última entrada dia ${lastTransactionsEntries}`,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastTransactionsEntries === 0
        ? "Não hà transaçōes"
        : `Última saída dia ${lastTransactionsExpensive}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: totalInterval
      },

    });
    setIsLoading(false);
   // console.log('Cards -> ', highlightData)

  }

  async function handleLogout() {
    signOut();
  }

  useEffect(() => {
    loadTransactionsData();
  }, []);

  // recarrega a lista quando volta a pagina e fica em foco
  useFocusEffect(useCallback(() => {
    loadTransactionsData();
  }, []));


  // const data: DatalistProps[] = [
  //   {
  //     id: '1',
  //     type: 'positive',
  //     title: 'Desenvolvimento de Apps',
  //     amount: 'R$ 12.000,00',
  //     category: {
  //       id: '1',
  //       name: 'Vendas',
  //       icon: 'dollar-sign'
  //     },
  //     date: '13/04/2022'
  //   },
  //   {
  //     id: '2',
  //     type: 'negative',
  //     title: 'Hamburgueria',
  //     amount: 'R$ 59,00',
  //     category: {
  //       id: '2',
  //       name: 'Alimentação',
  //       icon: 'coffee'
  //     },
  //     date: '10/04/2022'
  //   },
  //   {
  //     id: '3',
  //     type: 'negative',
  //     title: 'Aluguel Apartamento',
  //     amount: 'R$ 1.200,00',
  //     category: {
  //       id: '3',
  //       name: 'Casa',
  //       icon: 'shopping-bag'
  //     },
  //     date: '13/05/2022'
  //   },
  //   {
  //     id: '4',
  //     type: 'negative',
  //     title: 'Compra Gas',
  //     amount: 'R$ 100,00',
  //     category: {
  //       id: '4',
  //       name: 'Compras',
  //       icon: 'dollar-sign'
  //     },
  //     date: '13/05/2022'
  //   }
  // ];

  return (
    <Container>
      {
        isLoading 
        ? 
        <Load /> 
        :
          <>
            <Header>
              <UserWrapper>
                <UserInfo>
               
                  <Photo source={{uri: user?.picture }} />

                  <User>
                    <UserGreeting>Olá,</UserGreeting>
                    <UserName>{user.name}</UserName>
                  </User>
                </UserInfo>
                <LogoutButton onPress={handleLogout}>
                  <Icon name='power' />
                </LogoutButton>
              </UserWrapper>
            </Header>

            <HighlightCards >
              <HighlightCard
                type="up"
                title="Entradas"
                amount={highlightData.entries.amount}
                lastTransaction={highlightData.entries.lastTransaction}
              />
              <HighlightCard
                type="down"
                title="Saída"
                amount={highlightData.expensives.amount}
                lastTransaction={highlightData.expensives.lastTransaction}
              />
              <HighlightCard
                type="total"
                title="Total"
                amount={highlightData.total.amount}
                lastTransaction={highlightData.total.lastTransaction}
              />
            </HighlightCards>

            <Transactions>
              <Title>Listagem</Title>

              <TransactionsList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <TransactionCard data={item} />}
              />
            </Transactions>
          </>
      }
    </Container>
  )
}

export default Dashboard;