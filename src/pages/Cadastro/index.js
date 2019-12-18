import React, { Component } from "react";

import { View, Text } from "react-native";
import { Icon } from "react-native-ui-kitten";

import { Container, Btn, InputBox, styles } from "./styles";

export const EntrarIcon = style => <Icon name="person-add" {...style} />;
export const EyeOffIcon = style => <Icon name="eye-off" {...style} />;

export default class Cadastro extends Component {
  state = {
    name: "",
    matricula: "",
    email: "",
    senha: ""
  };

  static navigationOptions = {
    title: "Cadastro de conta"
  };

  handleCadastrar = () => {
    const { navigation } = this.props;
    navigation.navigate("Home", { name: "Fulano" });
  };

  onChangeNameText = name => {
    this.setState({ name });
  };
  onChangeMatriculaText = matricula => {
    this.setState({ matricula });
  };
  onChangeEmailText = email => {
    this.setState({ email });
  };
  onChangeSenhaText = senha => {
    this.setState({ senha });
  };

  isValidValue = () => {
    return true;
  };

  render() {
    const { name, matricula, email, senha } = this.state;
    const isValidInputValue = this.isValidValue();
    return (
      <Container>
        <InputBox
          label="Nome completo"
          size="small"
          status={isValidInputValue ? "primary" : "danger"}
          caption={isValidInputValue ? "" : "Invalid value"}
          value={name}
          onChangeText={this.onChangeNameText}
        />
        <InputBox
          label="Matrícula"
          size="small"
          status={isValidInputValue ? "primary" : "danger"}
          caption={isValidInputValue ? "" : "Invalid value"}
          value={matricula}
          onChangeText={this.onChangeMatriculaText}
        />
        <InputBox
          label="Email"
          size="small"
          status={isValidInputValue ? "primary" : "danger"}
          caption={isValidInputValue ? "" : "Invalid value"}
          value={email}
          onChangeText={this.onChangeEmailText}
        />
        <InputBox
          label="Senha"
          size="small"
          icon={EyeOffIcon}
          status={isValidInputValue ? "primary" : "danger"}
          caption={isValidInputValue ? "" : "Invalid value"}
          value={senha}
          onChangeText={this.onChangeSenhaText}
          secureTextEntry={true}
        />
        <Btn
          icon={EntrarIcon}
          onPress={this.handleCadastrar}
          textStyle={styles.BtnText}
        >
          Cadastrar
        </Btn>
      </Container>
    );
  }
}
