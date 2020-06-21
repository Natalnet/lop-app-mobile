import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ViewProps } from 'react-native';
import { parseISO, format } from 'date-fns';
import {
  QuestionContainer,
  QuestionContentScroll,
  QuestionHeader,
  QuestionTitle,
  QuestionDescription,
  QuestionInfo,
  QuestionInfoLabel,
  QuestionInfoText,
  QuestionInfoTag,
  QuestionInfoTagText,
} from './styles';

import ButtonBorded from '../ButtonBorded';
import ButtonFilled from '../ButtonFilled';

interface AuthorType {
  email: string;
}

interface ExerciseType {
  id: string;
  title: string;
  code: string;
  author: AuthorType;
  createdAt: Date;
  tags: string[];
  isCorrect: boolean;
  wasTried: boolean;
  description: string;
  difficulty: string;
  katexDescription?: string;
  accessCount: number;
  submissionsCorrectsCount: number;
  submissionsCount: number;
  colorQuestion: string;
}

interface Request extends ViewProps {
  question?: ExerciseType;
  setIsModalVisible: Function;
  isNavigable?: Boolean;
}

function formatDate(date: string) {
  const dateFormated = format(parseISO(date), 'dd/MM/yyyy - hh:mm');
  return dateFormated;
}

const ModalQuestion: React.FC<Request> = ({
  question,
  setIsModalVisible,
  isNavigable,
}: Request) => {
  const navigation = useNavigation();

  const navigateToSolveProblem = useCallback(() => {
    setIsModalVisible(false);
    navigation.navigate('SolveProblem', { question });
  }, [navigation, setIsModalVisible, question]);
  return (
    <QuestionContainer>
      <QuestionHeader>
        <QuestionTitle>{question?.title}</QuestionTitle>
      </QuestionHeader>
      <QuestionContentScroll>
        <QuestionDescription>{question?.description}</QuestionDescription>
        <QuestionInfo>
          <QuestionInfoLabel>Autor:</QuestionInfoLabel>
          <QuestionInfoText>{question?.author.email}</QuestionInfoText>
        </QuestionInfo>
        <QuestionInfo>
          <QuestionInfoLabel>Data de criação:</QuestionInfoLabel>
          <QuestionInfoText>
            {question?.createdAt && formatDate(question?.createdAt.toString())}
          </QuestionInfoText>
        </QuestionInfo>
        <QuestionInfoTag>
          <QuestionInfoLabel>tags:</QuestionInfoLabel>
          {question?.tags.map((tag, index) => (
            <QuestionInfoTagText key={index}>{tag}</QuestionInfoTagText>
          ))}
        </QuestionInfoTag>
      </QuestionContentScroll>
      <View style={{ flexDirection: 'row' }}>
        <ButtonBorded onPress={() => setIsModalVisible(false)}>
          VOLTAR
        </ButtonBorded>
        {isNavigable && (
          <ButtonFilled onPress={navigateToSolveProblem}>ACESSAR</ButtonFilled>
        )}
      </View>
    </QuestionContainer>
  );
};

export default ModalQuestion;
