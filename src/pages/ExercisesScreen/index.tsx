import React, { useCallback, useEffect, useState } from 'react';
import IconsMd from 'react-native-vector-icons/MaterialIcons';
import { FlatList, ActivityIndicator, Keyboard } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Modal from 'react-native-modal';

import api from '../../services/api';
import { useAuth } from '../../hooks/Auth';

import {
  Container,
  SearchBar,
  SearchInput,
  SearchList,
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

import ModalQuestion from '../../components/ModalQuestion';

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

function difficultyToString(difficulty: string): string {
  switch (difficulty) {
    case '5':
      return 'Muito difícil';
    case '4':
      return 'Difícil';
    case '3':
      return 'Médio';
    case '2':
      return 'Fácil';
    case '1':
      return ' Muito fácil';
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
  const { signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [filterSelect, setFilterSelect] = useState<React.ReactText>('title');
  const [searchText, setSearchText] = useState('');
  const [lastQuery, setLastQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [questionInModal, setQuestionInModal] = useState<
    undefined | ExerciseType
  >(undefined);

  const [exercises, setExercises] = useState<ExerciseType[]>([]);

  const activeModal = useCallback((question: ExerciseType) => {
    setQuestionInModal(question);
    setIsModalVisible(true);
  }, []);

  const loadExercises = useCallback(
    async (filterContent = '', filterType = 'title') => {
      setLoading(true);
      const query = `?include=${filterContent}&docsPerPage=15&field=${filterType}&sortBy=createdAt&sort=DESC&tags=[]`;
      try {
        const response = await api.get(`/question/page/1${query}`);
        setExercises(
          response.data.docs.map((exercise: ExerciseType) => ({
            ...exercise,
            colorQuestion: getQuestionColor(
              getStatusQuestion(exercise.wasTried, exercise.isCorrect),
            ),
          })),
        );
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
        setLastQuery(query);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        signOut();
      }
    },
    [signOut],
  );

  const nextPage = useCallback(async () => {
    if (!loading && currentPage < totalPages) {
      try {
        setLoading(true);
        const response = await api.get(
          `/question/page/${currentPage + 1}${lastQuery}`,
        );
        setExercises([
          ...exercises,
          ...response.data.docs.map((exercise: ExerciseType) => ({
            ...exercise,
            colorQuestion: getQuestionColor(
              getStatusQuestion(exercise.wasTried, exercise.isCorrect),
            ),
          })),
        ]);
        setCurrentPage(response.data.currentPage);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
  }, [currentPage, totalPages, lastQuery, loading, exercises]);

  useEffect(() => {
    loadExercises();
  }, [loadExercises]);

  const filteredSearch = useCallback(() => {
    if (!loading) {
      loadExercises(searchText.trim(), filterSelect);
      Keyboard.dismiss();
    }
  }, [searchText, filterSelect, loading, loadExercises]);

  return (
    <Container>
      <SearchBar>
        <SearchInput
          placeholder="Pesquise o exercício"
          autoCapitalize="none"
          onChangeText={setSearchText}
          value={searchText}
        />
        <SearchList>
          <Picker
            // focusable={enableFilterSelect}
            style={{ width: 120, fontSize: 5, left: 15 }}
            selectedValue={filterSelect}
            onValueChange={(itemValue) => setFilterSelect(itemValue)}
          >
            <Picker.Item label="Título" value="title" />
            <Picker.Item label="Código" value="code" />
          </Picker>
        </SearchList>
        <SearchButton onPress={filteredSearch}>
          {loading ? (
            <ActivityIndicator color={colors.sec1} />
          ) : (
            <IconsMd name="search" size={22} color={colors.sec1} />
          )}
        </SearchButton>
      </SearchBar>

      <Modal isVisible={isModalVisible}>
        <ModalQuestion
          question={questionInModal}
          setIsModalVisible={setIsModalVisible}
          isNavigable
        />
      </Modal>

      <FlatList
        data={exercises}
        keyExtractor={(exercise) => exercise.id}
        onEndReached={nextPage}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() =>
          loading ? <ActivityIndicator color={colors.prim1} /> : null
        }
        renderItem={({ item }) => (
          <ExerciseBox
            color={item.colorQuestion}
            onPress={() => activeModal(item)}
          >
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
