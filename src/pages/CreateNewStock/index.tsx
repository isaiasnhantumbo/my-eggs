/* eslint-disable react/jsx-no-bind */
import React, {useState} from 'react';
import {Label} from '../../components/Form/Label';
import DatePicker from 'react-native-date-picker';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import Feather from 'react-native-vector-icons/Feather';
import {
  AddButton,
  ButtonText,
  Container,
  FormContainer,
  Summary,
  SummaryContainer,
  SummaryData,
  SummaryTitle,
} from './styles';
import LineSvg from '../../assets/line.svg';
import {Button} from 'react-native';

interface CreateNewStockProps {}

export function CreateNewStock({}: CreateNewStockProps) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [eggs, setEggs] = useState('0');
  const [ownerId, setOwnerId] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const {UUID} = Realm.BSON;

  async function handleFormSubmit() {
    setOwnerId('2');

    const data = {
      _id: new UUID(),
      number_of_eggs: eggs,
      owner_id: ownerId,
      status: '1',
      date,
    };
    const realm = await getRealm();

    realm.write(() => {
      realm.create('Eggs', data);
    });
    setEggs('');
    setFormattedDate('');
  }
  return (
    <Container>
      <Header title="Adicionar registo" />
      <FormContainer>
        <Label>Digite o número de ovos produzidos</Label>
        <Input />
        <Label>Escolha a data</Label>
        <Label>{String(date)}</Label>
        <Input icon={<Feather name="calendar" color="#EFE3C880" size={20} />} />
        <Button title="Open" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </FormContainer>
      <SummaryContainer>
        <LineSvg />
        <Summary>
          <SummaryTitle>Data</SummaryTitle>
          <SummaryData>20/21/2021</SummaryData>
        </Summary>
        <Summary>
          <SummaryTitle>Ovos</SummaryTitle>
          <SummaryData>80</SummaryData>
        </Summary>
        <LineSvg />
      </SummaryContainer>
      <AddButton>
        <ButtonText>Adicionar registo</ButtonText>
      </AddButton>
    </Container>
  );
}
