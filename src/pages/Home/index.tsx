import React, {useEffect, useState} from 'react';

import Card from '../../components/Card';

import {Avatar, CardContainer, Container, Header, HeaderText} from './styles';

export default function Home() {
  const [name, setName] = useState('');
  useEffect(() => {
    if (name === '') {
      setName('Isaias');
    }
  }, []);
  return (
    <Container>
      <Header>
        <Avatar source={{uri: '../../assets/profile.jpg'}} />
        <HeaderText>Bem vindo {name}, aqui tem as suas estatísticas</HeaderText>
      </Header>
      <CardContainer>
        <Card title="Ovos de Ontem" quantity={18} />
        <Card title="Ovos de Hoje" quantity={0} />
      </CardContainer>

      <CardContainer>
        <Card title="Stock" quantity={18} />
        <Card title="Encomenda" quantity={0} />
      </CardContainer>
    </Container>
  );
}
