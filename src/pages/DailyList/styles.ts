import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({theme}) => theme.colors.background_primary};
  flex: 1;
`;
export const Input = styled.TextInput`
  background: ${({theme}) => theme.colors.background_input};
  margin: 0 16px 0 16px;
  border-radius: 10px;
  padding-left: 20px;
`;
