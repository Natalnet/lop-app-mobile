import React, { Component } from 'react';

import { View, Text } from 'react-native';

import {
  Container,
  LabelInputView,
  Label,
  Input,
  SubmitView,
  ErrMsg,
  Btn,
  BtnText,
  SwitchBtn,
  SwitchBtnText,
  EsqueceuView,
} from './styles';

export default class Login extends Component {
  state = {
    esqueceuSenha: false,
  };

  static navigationOptions = {
    title: 'Entrar com uma conta',
  };

  handleEntrar = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  handleEsqueceuSenha = () => {
    const { esqueceuSenha } = this.state;
    this.setState({ esqueceuSenha: !esqueceuSenha });
  };

  render() {
    const { esqueceuSenha } = this.state;
    return (
      <Container>
        <LabelInputView>
          <Label>Email:</Label>
          <Input />
        </LabelInputView>

        <LabelInputView>
          <Label>Senha:</Label>
          <Input />
        </LabelInputView>
        <SubmitView>
          <ErrMsg>possível mensagem de erro</ErrMsg>
          <Btn onPress={this.handleEntrar}>
            <BtnText>Entrar</BtnText>
          </Btn>
          <SwitchBtn active={esqueceuSenha} onPress={this.handleEsqueceuSenha}>
            <SwitchBtnText active={esqueceuSenha}>
              Esqueceu a Senha
            </SwitchBtnText>
          </SwitchBtn>
        </SubmitView>

        {esqueceuSenha && (
          <EsqueceuView>
            <LabelInputView>
              <Label>Email:</Label>
              <Input />
            </LabelInputView>

            <SubmitView>
              <ErrMsg>possível mensagem de erro</ErrMsg>
              <Btn>
                <BtnText>Recuperar Senha</BtnText>
              </Btn>
            </SubmitView>
          </EsqueceuView>
        )}
      </Container>
    );
  }
}
