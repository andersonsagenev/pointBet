import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  background-color: ${({theme }) => theme.colors.primary_finance};
  width: 100%;
  height: 70% ;
  justify-content: flex-end ;
  align-items: center ;
  `;
export const TitleWrapper = styled.View`
  align-items: center ;
  `;

  export const Title = styled.Text`
   font-family: ${({theme }) => theme.fonts.medium};
   color: ${({theme }) => theme.colors.shape};
   font-size: ${RFValue(26)}px ;
   text-align: center ;
   margin-top: 25px ;
  `;
  export const SignInTitle = styled.Text`
    font-family: ${({theme }) => theme.fonts.regular};
    color: ${({theme }) => theme.colors.shape};
    font-size: ${RFValue(16)}px ;
    text-align: center ;
    margin-top: 60px ;
    margin-bottom: 67px ;
  `;
  export const Footer = styled.View`
   width: 100% ;
   height: 30%;
   background-color: ${({theme }) => theme.colors.orange};

  `;
  export const FooterWrapper = styled.View`
   margin-top: ${RFPercentage(-4)}px ;
   padding: 0 32px ;
   justify-content: space-between ;
  `;