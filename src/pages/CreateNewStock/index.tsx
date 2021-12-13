import React from 'react';
import Card from '../../components/Card';

import {Container} from './styles';

function CreateNewStock() {
  return (
    <Container>
      <Card title="Adicionar ovos" quantity={0} />
    </Container>
  );
}

export default CreateNewStock;
