/* eslint-disable react/jsx-no-bind */
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import Feather from 'react-native-vector-icons/Feather';

import Realm from 'realm';

import LineSvg from '../../assets/line.svg';
import {Label} from '../../components/Form/Label';
import {Header} from '../../components/Header';
import getRealm from '../../services/realm';
import formatDate from '../../utils/formatDate';
import {
  AddButton,
  ButtonText,
  Container,
  FormContainer,
  Summary,
  SummaryContainer,
  SummaryData,
  SummaryTitle,
  InputText,
  SelectDateButton,
} from './styles';

export default function CreateNewStock() {
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
        <InputText onChangeText={setEggs} value={eggs} />
        <Label>Escolha a data</Label>
        <SelectDateButton onPress={() => setOpen(true)}>
          {/* <Feather name="calendar" color="#EFE3C880" size={20} /> */}
          <ButtonText>Selecionar Data</ButtonText>
        </SelectDateButton>
        <DatePicker
          modal
          open={open}
          date={date}
          title="Escolha a data"
          confirmText="Confirmar"
          cancelText="Cancelar"
          mode="date"
          locale="pt"
          onConfirm={(datePickerValue) => {
            setOpen(false);
            setDate(datePickerValue);
            setFormattedDate(formatDate(datePickerValue));
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
          <SummaryData>{formattedDate}</SummaryData>
        </Summary>
        <Summary>
          <SummaryTitle>Ovos</SummaryTitle>
          <SummaryData>{eggs}</SummaryData>
        </Summary>
        <LineSvg />
      </SummaryContainer>
      <AddButton onPress={handleFormSubmit}>
        <ButtonText>Adicionar registo</ButtonText>
      </AddButton>
    </Container>
  );
}
