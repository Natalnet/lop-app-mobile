import React, { Component } from "react";

import { Text, TouchableOpacity } from "react-native";

import { Container } from "./styles";

export default class ListaExerciciosTurma extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const class_id = navigation.getParam("classId");
    console.tron.log(class_id);
  }
  render() {
    return (
      <Container>
        <Text>Lista de Exercicios</Text>
      </Container>
    );
  }
}
