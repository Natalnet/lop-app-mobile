import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  name: string;
  profile: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
}

interface UserData {
  name: string;
  email: string;
  profile: string;
}
interface AuthState {
  token: string;
  user: UserData;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({
    token: '',
    user: { name: '', email: '', profile: '' },
  });

  const signOut = useCallback(async (): Promise<void> => {
    await Promise.all([
      AsyncStorage.removeItem('@lop:token'),
      AsyncStorage.removeItem('@lop:user'),
    ]);
    setData({
      token: '',
      user: { name: '', email: '', profile: '' },
    });
  }, []);

  const loadData = useCallback(async () => {
    try {
      const [token, user] = await Promise.all([
        await AsyncStorage.getItem('@lop:token'),
        await AsyncStorage.getItem('@lop:user'),
      ]);

      token && user && setData({ token, user: JSON.parse(user) });
      api.defaults.headers.authorization = `Bearer ${token}`;
      api.defaults.headers.profile = user && JSON.parse(user).profile;
      // api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZmNjIyNWE3LWVlMjAtNGFhYi04ZTIyLTY5YWVlNDBhMmQ3MSIsInByb2ZpbGUiOiJBTFVOTyIsImVtYWlsIjoiZ2xhdWJlcmNhcnZAZ21haWwuY29tIiwiaWF0IjoxNTkyNDIzNDkyLCJleHAiOjE1OTMwMjgyOTJ9.zirvvqfoOAKIHi1npvxqRWs8W3q4OS8gU2pV-iLnQNI`;
    } catch (err) {
      signOut();
    }
  }, [signOut]);
  useEffect(() => {
    loadData();
  }, [loadData]);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post('/auth/authenticate', {
        email,
        password,
      });
      const { token, user } = response.data;
      if (user.profile === 'ALUNO') {
        await Promise.all([
          AsyncStorage.setItem('@lop:token', token),
          AsyncStorage.setItem(
            '@lop:user',
            JSON.stringify({
              name: user.name,
              email: user.email,
              profile: user.profile,
            }),
          ),
        ]);
        setData({
          token,
          user: {
            name: user.name,
            email: user.email,
            profile: user.profile,
          },
        });
        api.defaults.headers.authorization = `Bearer ${token}`;
        api.defaults.headers.profile = user.profile;
        // api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZmNjIyNWE3LWVlMjAtNGFhYi04ZTIyLTY5YWVlNDBhMmQ3MSIsInByb2ZpbGUiOiJBTFVOTyIsImVtYWlsIjoiZ2xhdWJlcmNhcnZAZ21haWwuY29tIiwiaWF0IjoxNTkyNDIzNDkyLCJleHAiOjE1OTMwMjgyOTJ9.zirvvqfoOAKIHi1npvxqRWs8W3q4OS8gU2pV-iLnQNI`;
      } else {
        Alert.alert(
          'Erro - Acesso negado',
          'Você deve ter uma conta de aluno para logar na aplicação',
          [{ text: 'OK' }],
        );
      }
    } catch (err) {
      if (!!err.response) {
        Alert.alert(
          'Erro - Credenciais inválidas',
          'Digite novamente seu email e sua senha',
          [{ text: 'OK' }],
        );
      } else {
        Alert.alert(
          'Erro - Problema de Conexão',
          'Verifique sua conexão de internet ou tente novamente mais tarde',
          [{ text: 'OK' }],
        );
      }
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        name: data.user.name,
        profile: data.user.profile,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
