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
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const class_id = navigation.getParam("classId");
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token !== null) {
        const auth = {
          headers: { Authorization: "bearer " + token }
        };
        const response = await api.get(
          `/listQuestion/class/${class_id}/page/1`,
          auth
        );

        this.setState({ listas: response.data.docs, loading: false });
        console.tron.log(response.data.docs);
      }
    } catch (e) {
      // error reading value
    }
  }

  handleListPress = (id, title, questions) => {
    const { navigation } = this.props;
    navigation.navigate("ListQuestions", { id, title, questions });
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
                  onPress={() =>
                    this.handleListPress(item.id, item.title, item.questions)
                  }
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
