import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/mainStyles";

import { Button } from "react-native-ui-kitten";

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
  flex-direction: row;
  justify-content: space-between;
  margin: 70px 30px;
`;
export const Btn = styled(Button)`
  border: none;
  background-color: ${colors.prim1};
  border-radius: 30px;
`;
export const BtnText = styled.Text`
  font-size: 18px;
  color: ${colors.prim1};
  text-transform: uppercase;
`;

export const styles = StyleSheet.create({
  BtnText: {
    fontSize: 15,
    color: "#FFF"
  }
});
