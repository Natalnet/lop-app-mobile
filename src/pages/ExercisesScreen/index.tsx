import React from 'react';
import { Text } from 'react-native';
import IconsMd from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  SearchBar,
  SearchInput,
  SearchList,
  SearchListText,
  SearchButton,
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
      <Text>Exercises</Text>
    </Container>
  );
};

export default ExercisesScreen;
