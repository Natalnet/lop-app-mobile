import React, { Component } from "react";

import { View, FlatList, Text } from "react-native";

import {
  Container,
  ViewQuestion,
  ContainerHeader,
  TextQuestionCodeText,
  TextQuestionTitle,
  TextDescriptionQuestion,
  BtnQuestion,
  TextBtnQuestion
} from "./styles";

export default class ListQuestions extends Component {
  state = {
    questions: []
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const questions = navigation.getParam("questions");

    this.setState({ questions });
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
      title_question: title
    });
  };
  render() {
    const { questions } = this.state;
    return (
      <Container>
        {questions.length > 0 && (
          <FlatList
            data={questions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ViewQuestion>
                <ContainerHeader>
                  <View>
                    <TextQuestionCodeText>{item.code}</TextQuestionCodeText>
                    <TextQuestionTitle>{item.title}</TextQuestionTitle>
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
