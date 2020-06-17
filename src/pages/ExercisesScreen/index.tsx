import React, { useCallback, useEffect, useState } from 'react';
import IconsMd from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import api from '../../services/api';
import { useAuth } from '../../hooks/Auth';

import {
  Container,
  SearchBar,
  SearchInput,
  SearchList,
  SearchListText,
  SearchButton,
  ExerciseBox,
  Exercise,
  ExerciseTitle,
  ExeciseInfo,
  ExerciseCode,
  ExerciseIconGroup,
  ExerciseIconNumber,
  ExerciseDifficulty,
} from './styles';
import colors from '../../styles/colors';

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
// import { useNavigation } from '@react-navigation/native';

function difficultyToString(difficulty: string): string {
  switch (difficulty) {
    case '4':
      return 'Difícil';
    case '3':
      return 'Médio';
    case '2':
      return 'Fácil';
    case '1':
      return 'Super Fácil';
    default:
      return ' ';
  }
}

function getStatusQuestion(wasTried: boolean, isCorrect: boolean): number {
  return isCorrect ? 2 : wasTried ? 1 : 0;
}
function getQuestionColor(modeQuestion: number): string {
  return modeQuestion === 2
    ? colors.success1
    : modeQuestion === 1
    ? colors.danger1
    : colors.prim1;
}

const ExercisesScreen: React.FC = () => {
  // const navigation = useNavigation();
  const { signOut } = useAuth();
  const [exercises, setExercises] = useState<ExerciseType[]>([]);

  const loadExercises = useCallback(async () => {
    try {
      const response = await api.get(
        `/question/page/1?include=&docsPerPage=15&field=title&sortBy=createdAt&sort=DESC&tags=[]`,
      );

      setExercises(
        response.data.docs.map((exercise: ExerciseType) => ({
          ...exercise,
          colorQuestion: getQuestionColor(
            getStatusQuestion(exercise.wasTried, exercise.isCorrect),
          ),
        })),
      );
    } catch (err) {
      signOut();
    }
  }, [signOut]);

  useEffect(() => {
    loadExercises();
  }, [loadExercises]);

  return (
    <Container>
      <SearchBar>
        <SearchInput placeholder="Pesquise o exercício" />
        <SearchList>
          <SearchListText>Título</SearchListText>
          <IconsMd name="arrow-drop-down" size={16} color={colors.text1} />
        </SearchList>
        <SearchButton>
          <IconsMd name="search" size={22} color={colors.prim1} />
        </SearchButton>
      </SearchBar>

      <FlatList
        data={exercises}
        keyExtractor={(exercise) => exercise.id}
        renderItem={({ item }) => (
          <ExerciseBox color={item.colorQuestion}>
            <Exercise>
              <ExerciseTitle color={item.colorQuestion}>
                {item.title}
              </ExerciseTitle>
              <ExeciseInfo>
                <ExerciseCode color={item.colorQuestion}>
                  {item.code}
                </ExerciseCode>
                <ExerciseIconGroup>
                  <IconsMd
                    name="visibility"
                    size={14}
                    color={item.colorQuestion}
                  />
                  <ExerciseIconNumber color={item.colorQuestion}>
                    {item.accessCount}
                  </ExerciseIconNumber>
                </ExerciseIconGroup>
                <ExerciseIconGroup>
                  <IconsMd
                    name="thumb-up"
                    size={14}
                    color={item.colorQuestion}
                  />
                  <ExerciseIconNumber color={item.colorQuestion}>
                    {item.submissionsCorrectsCount}
                  </ExerciseIconNumber>
                </ExerciseIconGroup>
                <ExerciseIconGroup>
                  <IconsMd name="send" size={14} color={item.colorQuestion} />
                  <ExerciseIconNumber color={item.colorQuestion}>
                    {item.submissionsCount}
                  </ExerciseIconNumber>
                </ExerciseIconGroup>
                <ExerciseDifficulty color={item.colorQuestion}>
                  {difficultyToString(item.difficulty)}
                </ExerciseDifficulty>
              </ExeciseInfo>
            </Exercise>
            <IconsMd name="info" size={24} color={item.colorQuestion} />
          </ExerciseBox>
        )}
      />
    </Container>
  );
};

export default ExercisesScreen;
