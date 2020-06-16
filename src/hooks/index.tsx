import React from 'react';
import { AuthProvider } from './Auth';

const Providers: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);
export default Providers;
