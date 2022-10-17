import styled from 'styled-components/native';

export const Container = styled.TextInput`
  height: 46px;
  width: 100%;
  background-color: ${({theme}) => theme.grayinput};
  border-radius: 8px;
  border: ${({theme}) => theme.stroke} 1px solid;
  padding-left: 45px;
`;

export const Title = styled.Text`
  background-color: ${({theme}) => theme.background};
`