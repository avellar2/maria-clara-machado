import styled from 'styled-components/native';

export const Container = styled.Text`
  font-family: ${({theme}) => theme.regular};
  font-size: 14px;
  color: ${({theme}) => theme.black};
  margin-top: 25px;
  margin-bottom: 36px;
`;
