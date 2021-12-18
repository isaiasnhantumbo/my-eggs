import React from 'react';

import {
  Container,
  Footer,
  Quantity,
  Date,
  EditButton,
  ButtonText,
} from './styles';

interface SmallCardProps {}

export function SmallCard({}: SmallCardProps) {
  return (
    <Container>
      <Quantity>89 Ovos</Quantity>
      <Footer>
        <Date>20/12/2021</Date>
        <EditButton>
          <ButtonText>Editar</ButtonText>
        </EditButton>
      </Footer>
    </Container>
  );
}
