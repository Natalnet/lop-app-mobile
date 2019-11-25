import styled from "styled-components/native";
import { colors } from "../../styles/mainStyles";
import { StyleSheet } from "react-native";

import { Input, Button } from "react-native-ui-kitten";

export const Container = styled.View`
  margin: 20px;
  flex: 1;
  justify-content: center;
`;

export const InputBox = styled(Input)`
  margin-bottom: 20px;
`;

export const Btn = styled(Button)`
  border: none;
  background-color: ${colors.prim1};
  border-radius: 30px;
`;

export const styles = StyleSheet.create({
  BtnText: {
    fontSize: 15,
    color: "#FFF"
  }
});
