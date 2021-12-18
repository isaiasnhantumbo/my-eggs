import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({theme}) => theme.colors.background_primary};
  flex: 1;
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
  padding-left: 10px;
`;

export const AvatarContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-color: #dcaa70;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 50px;
`;

export const HeaderTextContainer = styled.View`
  align-items: flex-start;
  justify-items: center;
  gap: 8px;
  margin-left: 14px;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.text_medium};
  font-weight: 600;
`;
export const HeaderTextName = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.text_highlight};
  font-weight: 600;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
  justify-content: space-evenly;
`;

export const CardImage = styled.Image`
  width: 75px;
  height: 75px;
`;
