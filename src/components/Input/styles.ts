import styled from 'styled-components/native';

export const InputText = styled.TextInput`
  background: ${({theme}) => theme.colors.background_input};
  border-radius: 10px;
  padding-left: 20px;
  color: #efe3c880;
  font-size: 14px;
  margin-bottom: 24px;
`;
