import styled from 'styled-components/native';
import { colors } from '../../styles/mainStyles';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  background: ${colors.prim1};
  elevation: 4;
`;
export const Logo = styled.View`
  flex-direction: row;
  align-items: baseline;
`;
export const LogoLopText = styled.Text`
  font-size: 48px;
  color: ${colors.sec1};
`;
export const LogoVersionText = styled.Text`
  font-size: 24px;
  color: ${colors.sec1};
`;
export const Footer = styled.View`
  flex: 4;
  justify-content: flex-end;
`;
export const ButtonsView = styled.View`
  margin-bottom: 70px;
  flex-direction: row;
  justify-content: space-between;
  margin: 70px 20px;
`;
export const Btn = styled.TouchableOpacity`
  border-width: 3px;
  border-color: ${colors.prim1};
  padding: 5px 20px;
`;
export const BtnText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.prim1};
  text-transform: uppercase;
`;
