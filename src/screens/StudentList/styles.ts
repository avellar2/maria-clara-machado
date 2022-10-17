import { MagnifyingGlass } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  
`;

export const Header = styled.View`
  height: 131px;
  width: 100%;
  background-color: ${({ theme }) => theme.blue};
  justify-content: center;
  align-items: center;
`;

export const Greeting = styled.Text`
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.bold};
  font-size: 21px;
`;

export const Content = styled.View`
  padding: 0 24px;
  margin-top: -20px;
`;

export const Icon = styled(MagnifyingGlass)`
  position: absolute;
  z-index: 1;
  left: 15px;
  
`;

export const InputContet = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`;
