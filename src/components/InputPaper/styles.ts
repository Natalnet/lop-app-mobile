import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import colors from '../../styles/colors';

interface IconContentProps {
  isDarken?: boolean;
}

export const Container = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: center;
`;
export const Input = styled(TextInput).attrs({
  selectionColor: colors.prim4,
  numberOfLines: 1,
  theme: {
    colors: {
      primary: colors.prim1,
    },
  },
})`
  flex: 1;
  color: blue;
  top: -6px;
`;

export const IconContent = styled.View`
  background: ${({ isDarken }: IconContentProps) =>
    isDarken ? colors.prim2 : colors.prim1};
  height: 59px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  justify-content: center;
  align-items: center;
  right: -3px;
  z-index: 1;
  width: 40px;
`;
