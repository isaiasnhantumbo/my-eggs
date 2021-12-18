import React, {useEffect, useState} from 'react';
import profileImg from '../../assets/a.png';
import Card from '../../components/Card';
import BirdSvg from '../../assets/bird.svg';
import BagSvg from '../../assets/backet.svg';
import EasterSvg from '../../assets/easter.svg';
import {
  Avatar,
  AvatarContainer,
  CardContainer,
  Container,
  Header,
  HeaderText,
  HeaderTextContainer,
  HeaderTextName,
} from './styles';

export default function Home() {
  const [name, setName] = useState('');
  useEffect(() => {
    if (name === '') {
      setName('Isaias Nhantumbo');
    }
  }, []);
  return (
    <Container>
      <Header>
        <AvatarContainer>
          <Avatar source={profileImg} resizeMode="cover" />
        </AvatarContainer>
        <HeaderTextContainer>
          <HeaderText>Bem vindo,</HeaderText>
          <HeaderTextName>{name}</HeaderTextName>
        </HeaderTextContainer>
      </Header>
      <CardContainer>
        <Card title="Ovos de Ontem" quantity={18}>
          <BagSvg width={75} height={75} />
        </Card>
        <Card title="Ovos de Hoje" quantity={0}>
          <BirdSvg width={75} height={75} />
        </Card>
      </CardContainer>

      <CardContainer>
        <Card title="Stock" quantity={18}>
          <EasterSvg width={98} height={98} />
        </Card>
        <Card title="Encomenda" quantity={0}>
          <EasterSvg width={98} height={98} />
        </Card>
      </CardContainer>
    </Container>
  );
}
