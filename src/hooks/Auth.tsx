import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  name: string;
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

  const loadData = useCallback(async () => {
    try {
      const [token, user] = await Promise.all([
        await AsyncStorage.getItem('@lop:token'),
        await AsyncStorage.getItem('@lop:user'),
      ]);

      token && user && setData({ token, user: JSON.parse(user) });
    } catch (err) {
      // TODO: Error Box
      console.log(err);
    }
  }, []);
  useEffect(() => {
    loadData();
  }, [loadData]);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/auth/authenticate', { email, password });
    const { token, user } = response.data;
    try {
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
    } catch (err) {
      // TODO: Error Box
      console.log(err);
    }
  }, []);
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
  return (
    <AuthContext.Provider value={{ name: data.user.name, signIn, signOut }}>
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
