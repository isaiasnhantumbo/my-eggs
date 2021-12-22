/* eslint-disable import/prefer-default-export */
import React from 'react';

import {
  Container,
  Footer,
  Quantity,
  Date,
  EditButton,
  ButtonText,
} from './styles';

interface SmallCardProps {
  eggs: string;
  date: string;
}

export function SmallCard({eggs, date}: SmallCardProps) {
  return (
    <Container>
      <Quantity>{`${eggs} Ovos`}</Quantity>
      <Footer>
        <Date>{date}</Date>
        {/* <EditButton>
          <ButtonText>Editar</ButtonText>
        </EditButton> */}
      </Footer>
    </Container>
  );
}
