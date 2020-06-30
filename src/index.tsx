import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import Providers from './hooks';
import './config/ReactotronConfig';

import colors from './styles/colors';

const App: React.FC = () => {
  return (
    <Providers>
      <StatusBar backgroundColor={colors.prim2} />
      <Routes />
    </Providers>
  );
};

export default App;
