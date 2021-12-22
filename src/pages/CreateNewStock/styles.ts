import {ReactNode} from 'react';
import {TextInputProps} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: ${({theme}) => theme.colors.background_primary};
  flex: 1;
  padding: 0 18px 0 18px;
  /* justify-content: space-around; */
`;
export const FormContainer = styled.View``;

export const SummaryContainer = styled.View`
  margin-top: 50px;
`;
export const Summary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-top: 16px;
`;
export const SummaryData = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.white};
`;
export const SummaryTitle = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 500;
`;

export const AddButton = styled.TouchableOpacity`
  margin-top: 64px;
  background: #efe3c8;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 15px 50px;
`;

export const ButtonText = styled.Text`
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: #4a2b29;
`;

export const SelectDateButton = styled.TouchableOpacity`
  background: #efe3c8;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 15px 50px;
`;

export interface InputProps extends TextInputProps {
  icon?: ReactNode;
}
export const InputText = styled.TextInput<InputProps>`
  background: ${({theme}) => theme.colors.background_input};
  border-radius: 10px;
  padding-left: 20px;
  color: #efe3c880;
  font-size: 14px;
  margin-bottom: 24px;
`;
