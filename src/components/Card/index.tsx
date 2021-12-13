import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Container, Subtitle, Title} from './styles';

interface CardProps {
  title: string;
  quantity: number;
}

function Card({quantity, title}: CardProps) {
  return (
    <Container>
      <Feather name="users" size={36} color="#012134" />
      <Title>{title}</Title>
      <Subtitle>{quantity}</Subtitle>
    </Container>
  );
}

export default Card;
