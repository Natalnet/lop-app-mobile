import React, { useState, useCallback, useContext } from 'react';
import { View } from 'react-native';

import { useAuth } from '../../hooks/Auth';

import {
  Container,
  Header,
  Logo,
  Form,
  Label,
  ForgotPassword,
  ForgotPasswordText,
} from './styles';

import InputWithIcon from '../../components/InputWithIcon';
import ButtonFilled from '../../components/ButtonFilled';
import ButtonBorded from '../../components/ButtonBorded';

import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const [isRecoverMode, setIsRecoverMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');

  const cleanErrors = useCallback(() => {
    setErrEmail('');
    setErrPassword('');
  }, []);

  const validateFields = useCallback(() => {
    let err = false;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(email).toLowerCase())) {
      setErrEmail('Email inválido');
      err = true;
    }
    if (!isRecoverMode) {
      if (password.length < 5) {
        setErrPassword('Senha inválida inválido');
        err = true;
      }
    }
    return err;
  }, [email, password, isRecoverMode]);

  const handleRecoverEmail = useCallback(() => {
    cleanErrors();
    if (!validateFields()) {
      return;
    }
  }, [validateFields, cleanErrors]);

  const handleSignIn = useCallback(async () => {
    cleanErrors();
    if (validateFields()) {
      return;
    }
    signIn({ email, password });
  }, [validateFields, cleanErrors, email, password, signIn]);

  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <Form>
        <Label>
          {isRecoverMode ? 'Recupere sua senha' : 'Faça login na sua conta'}
        </Label>
        <InputWithIcon
          iconName="mail"
          label="Digite o seu email"
          errMsg={errEmail}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCompleteType="email"
          autoCorrect={false}
          autoCapitalize="none"
        />
        {isRecoverMode ? (
          <>
            <View style={{ flexDirection: 'row' }}>
              <ButtonBorded onPress={() => setIsRecoverMode(false)}>
                VOLTAR
              </ButtonBorded>
              <ButtonFilled onPress={handleRecoverEmail}>
                RECUPERAR SENHA
              </ButtonFilled>
            </View>
          </>
        ) : (
          <>
            <InputWithIcon
              iconName="lock"
              label="Digite o seu email"
              errMsg={errPassword}
              value={password}
              secureTextEntry
              onChangeText={setPassword}
            />
            <ForgotPassword onPress={() => setIsRecoverMode(true)}>
              <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
            </ForgotPassword>
            <ButtonFilled onPress={handleSignIn}>ENTRAR</ButtonFilled>
          </>
        )}
      </Form>
    </Container>
  );
};

export default SignIn;
