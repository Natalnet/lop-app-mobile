import React, { Component } from "react";

import { View, FlatList, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";
import VecIcon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../styles/mainStyles";

import { Spinner } from "react-native-ui-kitten";

import {
  Container,
  ViewQuestion,
  ContainerHeader,
  TextQuestionTitle,
  TextDescriptionQuestion,
  BtnQuestion,
  TextBtnQuestion,
  LoadingContainer,
  ViewGroupDetails,
  ViewDetail,
  TextNumberDetail
} from "./styles";

export default class ListQuestions extends Component {
  state = {
    questions: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const listId = navigation.getParam("listId");
    const classId = navigation.getParam("classId");
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token !== null) {
        const auth = {
          headers: { Authorization: "bearer " + token }
        };
        const response = await api.get(
          `/listQuestion/${listId}?idClass=${classId}`,
          auth
        );
        this.setState({ questions: response.data.questions, loading: false });
      }
    } catch (e) {
      // error reading value
    }
  }
  descriptionReduce = description => {
    if (description.length > 100) {
      return `${description.slice(0, 100)}...`;
    }
    return description;
  };
  handleQuestionPress = (id, description, title) => {
    const { navigation } = this.props;
    navigation.navigate("Ide", {
      id_question: id,
      description,
      questionName: title
    });
  };
  render() {
    const { questions, loading } = this.state;
    return (
      <Container>
        {loading ? (
          <LoadingContainer>
            <Spinner status='primary' />
          </LoadingContainer>
        ) : (
          <FlatList
            data={questions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ViewQuestion>
                <ContainerHeader>
                  <View>
                    <TextQuestionTitle>{item.title}</TextQuestionTitle>
                    <ViewGroupDetails>
                      <ViewDetail>
                        <VecIcon name='list' size={20} color={colors.prim3} />
                        <TextNumberDetail>
                          {item.submissionsCount}
                        </TextNumberDetail>
                      </ViewDetail>
                      <ViewDetail>
                        <VecIcon name='done' size={20} color={colors.prim3} />
                        <TextNumberDetail>
                          {item.completedSumissionsCount}
                        </TextNumberDetail>
                      </ViewDetail>
                      <ViewDetail>
                        <VecIcon
                          name='spellcheck'
                          size={20}
                          color={colors.prim3}
                        />
                        <TextNumberDetail>
                          {item.correctSumissionsCount}
                        </TextNumberDetail>
                      </ViewDetail>
                    </ViewGroupDetails>
                  </View>
                  <BtnQuestion
                    onPress={() =>
                      this.handleQuestionPress(
                        item.id,
                        item.description,
                        item.title
                      )
                    }
                  >
                    <TextBtnQuestion>Fazer</TextBtnQuestion>
                  </BtnQuestion>
                </ContainerHeader>
                <TextDescriptionQuestion>
                  {this.descriptionReduce(item.description)}
                </TextDescriptionQuestion>
              </ViewQuestion>
            )}
          />
        )}
      </Container>
    );
  }
}
