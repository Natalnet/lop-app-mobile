import React, { Component } from "react";

import { View, Text } from "react-native";

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
  EsqueceuView
} from "./styles";

export default class Cadastro extends Component {
  state = {};

  static navigationOptions = {
    title: "Cadastro de conta"
  };

  handleCadastrar = () => {
    const { navigation } = this.props;
    navigation.navigate("Home", { name: "Fulano" });
  };

  render() {
    const { esqueceuSenha } = this.state;
    return (
      <Container>
        <LabelInputView>
          <Label>Nome:</Label>
          <Input />
        </LabelInputView>
        <LabelInputView>
          <Label>Matricula:</Label>
          <Input />
        </LabelInputView>
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
          <Btn onPress={this.handleCadastrar}>
            <BtnText>Cadastrar</BtnText>
          </Btn>
        </SubmitView>
      </Container>
    );
  }
}
