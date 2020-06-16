import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface ColorProps {
  color: string;
}

export const Container = styled.TouchableOpacity`
  border-color: ${({ color }: ColorProps) => color};
  border-width: 1px;
  padding: 20px 0;
  max-height: 40px;
  flex: 1;
  margin: 20px 10px;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.Text`
  color: ${({ color }: ColorProps) => color};
`;
