import React from 'react';
import {ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../../components/Card';
import {Header} from '../../components/Header';
import {SmallCard} from '../../components/SmallCard';

import {Container, Input} from './styles';

export function DailyList() {
  return (
    <Container>
      <Header title="Todos os registros" />
      <Input
        placeholder="Pesquisar por dia"
        placeholderTextColor="#EFE3C880"
        children={<Feather name="search" color="#EFE3C880" size={20} />}
      />
      <ScrollView>
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </ScrollView>
    </Container>
  );
}
