import React, {ReactNode} from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

interface LoginProps {
  children: ReactNode;
}

function Login({children}: LoginProps) {
  return (
    <Container>
      <Text>Login</Text>
      {children}
    </Container>
  );
}

export default Login;
