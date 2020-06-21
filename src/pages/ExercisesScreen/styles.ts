import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface ColorProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  margin: 10px;
`;
export const SearchBar = styled.View`
  flex-direction: row;
  height: 40px;
  margin-bottom: 15px;
`;
export const SearchInput = styled.TextInput`
  border-width: 1px;
  border-color: ${colors.prim1};
  flex: 1;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 5px;
`;
export const SearchList = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-left-width: 0px;

  border-width: 1px;
  border-color: ${colors.prim1};
`;
export const SearchButton = styled.TouchableOpacity`
  width: 40px;
  background: ${colors.prim2};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ExerciseBox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: ${colors.sec1};
  border-width: 1px;
  border-color: ${colors.prim2};
  border-color: ${({ color }: ColorProps) => color || colors.prim1};
  border-radius: 10px;
  elevation: 5;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
`;
export const Exercise = styled.View`
  flex: 1;
`;
export const ExerciseTitle = styled.Text`
  color: ${({ color }: ColorProps) => color || colors.prim1};
  padding-bottom: 10px;
  letter-spacing: 0.5px;
  font-weight: bold;
  padding-right: 15px;
`;
export const ExeciseInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
`;
export const ExerciseCode = styled.Text`
  color: ${({ color }: ColorProps) => color || colors.prim1};
  font-weight: bold;
  letter-spacing: 0.5px;
  font-size: 12px;
`;
export const ExerciseDifficulty = styled.Text`
  color: ${({ color }: ColorProps) => color || colors.prim1};
  font-size: 12px;
`;

export const ExerciseIconGroup = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ExerciseIconNumber = styled(ExerciseDifficulty)`
  margin-left: 3px;
`;
