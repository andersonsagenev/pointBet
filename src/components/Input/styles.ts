import styled from 'styled-components/native';
import { COLORS } from '../../theme';

export const Container = styled.TextInput`
  width: 100%;
  height: 54px;
  padding: 0 16px;

  background-color: ${({ theme }) => COLORS.BACKGROUND};
  color: ${({ theme }) => COLORS.TEXT};
`;