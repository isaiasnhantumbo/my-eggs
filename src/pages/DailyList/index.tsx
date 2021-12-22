/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react/no-children-prop */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {Header} from '../../components/Header';
import {SmallCard} from '../../components/SmallCard';
import getRealm from '../../services/realm';
import formatDate from '../../utils/formatDate';
import {Container, Input} from './styles';

interface EggsProps {
  _id: string;
  number_of_eggs: string;
  owner_id: string;
  status: string;
  date: Date;
}

export default function DailyList() {
  const [eggsData, setEggsData] = useState<EggsProps[]>([]);

  async function loadEggs() {
    const realm = await getRealm();

    const data = realm.objects('Eggs').sorted('date', true);

    setEggsData(data);
    console.log(data);
  }

  useEffect(() => {
    loadEggs();
  }, []);

  return (
    <Container>
      <Header title="Todos os registros" />
      <Input
        placeholder="Pesquisar por dia"
        placeholderTextColor="#EFE3C880"
        children={<Feather name="search" color="#EFE3C880" size={20} />}
      />
      <FlatList
        data={eggsData}
        keyExtractor={item => String(item._id)}
        renderItem={({item}) => (
          <SmallCard date={formatDate(item.date)} eggs={item.number_of_eggs} />
        )}
      />
    </Container>
  );
}
