import React, {ReactNode} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Button, Container, Subtitle, SubtitleContainer, Title} from './styles';

interface CardProps {
  title: string;
  quantity: number;
  children: ReactNode;
}

function Card({quantity, title, children}: CardProps) {
  return (
    <Container>
      {children}
      <Title>{title}</Title>
      <SubtitleContainer>
        <Subtitle>{quantity}</Subtitle>
        <Button>
          <Feather name="plus" size={24} color="#1C161E" />
        </Button>
      </SubtitleContainer>
    </Container>
  );
}

export default Card;
