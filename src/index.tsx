import React from 'react';
import Routes from './Routes';
import Providers from './hooks';

const App: React.FC = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
};

export default App;
