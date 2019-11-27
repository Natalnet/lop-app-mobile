import React, { Component } from "react";

import { Text, TouchableOpacity } from "react-native";

import { Container } from "./styles";

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Ide")}
          style={{ padding: 10, backgroundColor: "#00f" }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Teste IDE</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
