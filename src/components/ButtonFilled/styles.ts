import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

interface ContainerProps {
  color: string;
}

export const Container = styled(RectButton)`
  background: ${({ color }: ContainerProps) => color};
  padding: 20px 0;
  max-height: 40px;
  flex: 1;
  margin: 20px 10px;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.Text`
  color: ${colors.sec1};
`;
