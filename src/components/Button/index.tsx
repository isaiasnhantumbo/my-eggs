import React, {ReactNode} from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

interface ButtonProps {
  children: ReactNode;
}

function Button({children}: ButtonProps) {
  return (
    <Container>
      <Text>Button</Text>
      {children}
    </Container>
  );
}

export default Button;
