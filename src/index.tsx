/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import Reactotron from 'reactotron-react-native';

import {ThemeProvider} from 'styled-components';

import Routes from './routes';
import theme from './styles/theme';

if (__DEV__) {
  import('./config/ReactotronConfig').then(() =>
    Reactotron.log('Reactotron Configured'),
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
