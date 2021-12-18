import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 16px;
  width: 163px;
  height: 230px;
  background-color: ${({theme}) => theme.colors.background_card};
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  border-radius: 12px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 400;
  margin-left: 22px;
`;

export const SubtitleContainer = styled.View`
  width: 111px;
  height: 39px;
  background: ${({theme}) => theme.colors.background_card_item};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
`;

export const Button = styled.TouchableOpacity`
  width: 39px;
  height: 39px;
  background: #efe3c8;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;
