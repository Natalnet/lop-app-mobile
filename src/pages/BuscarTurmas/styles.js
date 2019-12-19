import styled from "styled-components/native";
import { colors } from "../../styles/mainStyles";
import { StyleSheet } from "react-native";
import { Input } from "react-native-ui-kitten";

export const Container = styled.View`
  flex: 1;
`;
export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled(Input)`
  margin-bottom: 20px;
`;

export const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});
