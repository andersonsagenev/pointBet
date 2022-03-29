import React, { useCallback, useEffect, useState } from 'react';
import { HistoryCard } from '../../components/HistoryCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { categories } from '../../utils/categorias';
import { useFocusEffect } from '@react-navigation/native';
import { VictoryPie } from 'victory-native';
import { useTheme } from 'styled-components/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Load } from '../../components/Load';

import {
    Container,
    Header,
    Title,
    Content,
    ChartContainer,
    MonthSelect,
    MonthSelectButton,
    MonthSelectIcon,
    Month

} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

interface TransactionData {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    category: string;
    date: string;
}
interface CategoryData {
    key: string;
    name: string;
    total: number;
    totalFormatted: string;
    color: string;
    percent: string;
}

export function Resume() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([])
    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(false);

    function handleDateChange(action: 'next' | 'previus') {
        setIsLoading(true);

        if(action === 'next') {
           const newDate =  addMonths(selectedDate, 1);
           setSelectedDate(newDate);
        }else{
            const newDate =  subMonths(selectedDate, 1);
            setSelectedDate(newDate);
        }
    }

    async function loadData() {
        setIsLoading(true);
        const dataKey = '@gofinance:transactions';
        const storageTransactions = await AsyncStorage.getItem(dataKey);
        const responseFormatted = storageTransactions ? JSON.parse(storageTransactions) : [];

        console.log('lista cheia ->', responseFormatted)


        const expensives = responseFormatted
            .filter((expensive: TransactionData) => expensive.type === 'negative' &&
            new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
            new Date(expensive.date).getFullYear() === selectedDate.getFullYear());

        // soma o total 
        const expensivesTotal = expensives.reduce((acumullator: number, expensive: TransactionData) => {
            return acumullator + Number(expensive.amount);
        }, 0);

        //  console.log('List Expensives', expensives)
        const totalByCategory: CategoryData[] = [];

        categories.forEach((category => {
            let categorySum = 0;
            expensives.forEach((expensive: TransactionData) => {
                //  console.log('objeto', expensive)
                if (expensive.category === category.key) {
                    categorySum += Number(expensive.amount);
                }
            });

            if (categorySum > 0) {
                const totalFormatted = categorySum.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })

                const percent = `${(categorySum / expensivesTotal * 100).toFixed(0)}%`;
                totalByCategory.push({
                    key: category.key,
                    name: category.name,
                    total: categorySum,
                    totalFormatted,
                    color: category.color,
                    percent: percent,
                });
            }
        }));

        setTotalByCategories(totalByCategory)
        setIsLoading(false);

    }
    // passa a dependencia no useEffect para que quando atualizar o selectedDate ele chama novamente
    // useEffect(() => {
    //     loadData();
    // }, [selectedDate]);
    
    useFocusEffect(useCallback(() => {
        loadData();
    }, [selectedDate]));



    return (
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>
            {
                isLoading ? <Load /> :
               
                    <Content
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 24,
                        paddingBottom: useBottomTabBarHeight(),
                    }}
                >
                    <MonthSelect>
                        <MonthSelectButton onPress={() => handleDateChange('previus')}>
                            <MonthSelectIcon name="chevron-left" />
                        </MonthSelectButton>


                        <Month>{ format(selectedDate, 'MMMM, yyyy', {locale: ptBR})}</Month>

                        <MonthSelectButton onPress={() => handleDateChange('next')}>
                            <MonthSelectIcon name="chevron-right" />
                        </MonthSelectButton>


                    </MonthSelect>

                    <ChartContainer>
                        <VictoryPie
                            data={totalByCategories}
                            colorScale={totalByCategories.map(category => category.color)}
                            style={{
                                labels: {
                                    fontSize: RFValue(18),
                                    fontWeight: 'bold',
                                    fill: theme.colors.shape
                                }
                            }}
                            labelRadius={50}
                            x="percent"
                            y="total"
                        />
                    </ChartContainer>
                    {
                        totalByCategories.map(item => (
                            <HistoryCard
                                key={item.key}
                                title={item.name}
                                amount={item.totalFormatted}
                                color={item.color}
                            />
                        ))
                    }
                    </Content>
            }
           

        </Container>
    )
};




