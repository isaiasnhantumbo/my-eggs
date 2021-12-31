import {TextProps} from 'react-native';

import styled from 'styled-components/native';

interface WelcomeMessageProps extends TextProps {
  isSubtitle?: boolean;
}
export const Container = styled.View`
  background: ${({theme}) => theme.colors.background_primary};
  flex: 1;
  padding: 16px;
`;

export const WelcomeContainer = styled.View`
  margin-top: 64px;
  align-items: center;
  justify-items: center;
`;

export const WelcomeMessage = styled.Text<WelcomeMessageProps>`
  font-size: ${(props) => (props.isSubtitle ? '16px' : '20px')};
  color: ${({theme}) => theme.colors.white};
  margin-top: ${(props) => (props.isSubtitle ? '24px' : '0px')};
  font-weight: 600;
`;

export const WelcomeImage = styled.Image`
  width: 350px;
  height: 350px;
`;

export const ButtonContinueWithGoogle = styled.TouchableOpacity`
  margin-top: 64px;
  background: #efe3c8;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 15px 50px;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: #4a2b29;
  padding-right: 8px;
`;
