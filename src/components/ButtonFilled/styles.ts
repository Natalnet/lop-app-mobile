import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface ContainerProps {
  color: string;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: ${({ color }: ContainerProps) => color};
  padding: 20px 0;
  max-height: 40px;
  flex: 1;
  margin: 20px 10px;
  justify-content: center;
  align-items: center;
  elevation: 5;
  border-radius: 10px;
`;
export const Label = styled.Text`
  color: ${colors.sec1};
`;
