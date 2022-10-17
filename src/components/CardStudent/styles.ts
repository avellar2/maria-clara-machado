import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.blue};
  /* justify-content: center; */
  align-items: center;
  padding: 13px 0;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
`;
