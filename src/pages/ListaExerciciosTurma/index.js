import React, { Component } from "react";

import AsyncStorage from "@react-native-community/async-storage";

import { Container } from "./styles";
import { FlatList, View } from "react-native";

import {
  LoadingContainer,
  ViewList,
  TextListCodeText,
  TextListTitle,
  BtnList,
  TextBtnList
} from "./styles";

import api from "../../services/api";
import { Spinner } from "react-native-ui-kitten";

export default class ListaExerciciosTurma extends Component {
  state = {
    listas: [],
    loading: false,
    classId: ""
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const classId = navigation.getParam("classId");
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token !== null) {
        const auth = {
          headers: { Authorization: "bearer " + token }
        };
        const response = await api.get(
          `/listQuestion?idClass=${classId}`,
          auth
        );

        this.setState({ listas: response.data, loading: false, classId });
      }
    } catch (e) {
      // error reading value
    }
  }

  handleListPress = (id, name) => {
    const { classId } = this.state;
    const { navigation } = this.props;
    navigation.navigate("Questoes", {
      listId: id,
      listName: `${name}`,
      classId
    });
  };
  render() {
    const { listas, loading } = this.state;
    return (
      <Container>
        {loading ? (
          <LoadingContainer>
            <Spinner status='primary' />
          </LoadingContainer>
        ) : (
          <FlatList
            data={listas}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ViewList>
                <View>
                  <TextListCodeText>{item.code}</TextListCodeText>
                  <TextListTitle>{item.title}</TextListTitle>
                </View>
                <BtnList
                  onPress={() => this.handleListPress(item.id, item.title)}
                >
                  <TextBtnList>Abrir</TextBtnList>
                </BtnList>
              </ViewList>
            )}
          />
        )}
      </Container>
    );
  }
}
