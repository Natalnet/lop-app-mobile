import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin: 0 10px;
`;
export const Header = styled.View`
  margin: 40px 0;
  justify-content: center;
  align-items: center;
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
export const ForgotPassword = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 0 10px 10px 10px;
`;
export const ForgotPasswordText = styled.Text`
  color: ${colors.prim2};
  text-decoration: underline;
`;
