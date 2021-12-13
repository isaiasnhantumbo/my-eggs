import styled from 'styled-components/native';

export const Container = styled.View`
  /* background-color: #fcfcfc; */
  flex: 1;
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  background-color: #33f3fc;
  border-radius: 50px;
`;

export const HeaderText = styled.Text`
  margin-left: 14px;
  font-size: 18px;
  color: #07090d;
  font-weight: 600;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
  justify-content: space-evenly;
`;
