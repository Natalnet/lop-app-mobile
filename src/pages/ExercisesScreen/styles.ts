import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  margin: 10px;
`;
export const SearchBar = styled.View`
  flex-direction: row;
  height: 40px;
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
  padding: 0 5px;
  border-left-width: 0px;

  border-width: 1px;
  border-color: ${colors.prim1};
`;
export const SearchListText = styled.Text``;
export const SearchButton = styled.TouchableOpacity`
  width: 40px;
  background: ${colors.prim2};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  align-items: center;
`;
