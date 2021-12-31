/* eslint-disable react/jsx-no-bind */
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';

import WelcomeImg from '../../assets/Welcome-amico.png';
import {useAuth} from '../../hooks/useAuth';
import {
  ButtonContinueWithGoogle,
  ButtonText,
  Container,
  WelcomeContainer,
  WelcomeImage,
  WelcomeMessage,
} from './styles';

export default function Login() {
  const {signIn} = useAuth();

  const navigation = useNavigation();

  async function signInWithGoogle() {
    signIn();
  }
  return (
    <Container>
      <WelcomeContainer>
        <WelcomeMessage>Bem vindo</WelcomeMessage>
        <WelcomeMessage isSubtitle>
          Gerencie as informações da sua criação de ovos em local móvel
        </WelcomeMessage>
        <WelcomeImage source={WelcomeImg} />
      </WelcomeContainer>
      <ButtonContinueWithGoogle onPress={signInWithGoogle}>
        <ButtonText>Continuar com Google</ButtonText>
        <AntDesign name="google" size={20} color="#4a2b29" />
      </ButtonContinueWithGoogle>
    </Container>
  );
}
