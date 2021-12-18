import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 102px;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.text_highlight};
`;
