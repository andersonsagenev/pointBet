import React from 'react';
import { categories } from '../../utils/categorias';

import { Amount, Container, Footer, CategoryName, Icon, Date, Title, Category } from './styles';

export interface TransactionCardProps {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface Props {
    data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
    // filtro na lista de categoria para buscar o objeto
    const [ category ] = categories.filter( item => item.key === data.category);

    return (
        <Container>
            <Title>{data.name}</Title>
            <Amount type={data.type}>
                { data.type === 'negative' && '- '}
                { data.amount }
            </Amount>
            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}
