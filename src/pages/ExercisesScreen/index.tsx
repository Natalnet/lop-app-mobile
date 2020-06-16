import React from 'react';
import IconsMd from 'react-native-vector-icons/MaterialIcons';

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
// import { useNavigation } from '@react-navigation/native';

const ExercisesScreen: React.FC = () => {
  // const navigation = useNavigation();
  return (
    <Container>
      <SearchBar>
        <SearchInput placeholder="Pesquise o exercício" />
        <SearchList>
          <SearchListText>Título</SearchListText>
          <IconsMd name="arrow-drop-down" size={16} color={colors.text1} />
        </SearchList>
        <SearchButton>
          <IconsMd name="search" size={22} color={colors.sec1} />
        </SearchButton>
      </SearchBar>
      <ExerciseBox>
        <Exercise>
          <ExerciseTitle>
            Elementos do vetor múltiplos de 3 e de 4 simultaneamente.
          </ExerciseTitle>
          <ExeciseInfo>
            <ExerciseCode>3f1417b124 </ExerciseCode>
            <ExerciseIconGroup>
              <IconsMd name="visibility" size={14} color={colors.sec1} />
              <ExerciseIconNumber>12</ExerciseIconNumber>
            </ExerciseIconGroup>
            <ExerciseIconGroup>
              <IconsMd name="thumb-up" size={14} color={colors.sec1} />
              <ExerciseIconNumber>2</ExerciseIconNumber>
            </ExerciseIconGroup>
            <ExerciseIconGroup>
              <IconsMd name="send" size={14} color={colors.sec1} />
              <ExerciseIconNumber>1</ExerciseIconNumber>
            </ExerciseIconGroup>
            <ExerciseDifficulty>Difícil</ExerciseDifficulty>
          </ExeciseInfo>
        </Exercise>
        <IconsMd name="info" size={24} color={colors.sec1} />
      </ExerciseBox>
    </Container>
  );
};

export default ExercisesScreen;
