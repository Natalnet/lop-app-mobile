import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  margin: 0 10px;
`;
export const Header = styled.View`
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Form = styled.View`
  flex: 2;
`;
export const Logo = styled.Image`
  width: 128px;
  height: 128px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.text1};
  margin-bottom: 20px;
`;
