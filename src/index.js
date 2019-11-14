import React from 'react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import LoginNav from './routes/LoginNav';
import { colors } from './styles/mainStyles';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.prim1} />
      <LoginNav />
    </>
  );
};

export default App;
