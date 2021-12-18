import styled from 'styled-components/native';

export const Container = styled.View`
  height: 108px;
  border-radius: 12px;
  background: #ffffff1a;
  width: 296px;
  margin-top: 16px;
  justify-content: center;
  margin-left: 66px;
`;

export const Quantity = styled.Text`
  margin-left: 36px;
  margin-bottom: 8px;
  font-size: 18px;
  height: 27px;
  color: #877c74;
`;

export const Footer = styled.View`
  background: #ffffff14;
  border-radius: 12px;
  margin: 0 24px 0 24px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
`;

export const Date = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${({theme}) => theme.colors.white};
`;

export const EditButton = styled.TouchableOpacity`
  width: 86px;
  height: 26px;
  background: ${({theme}) => theme.colors.text_highlight};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.background_input};
  font-weight: 500;
  font-size: 14px;
`;
