import styled from "styled-components/native";
import { StyleSheet } from "react-native";

import { Text } from "react-native-ui-kitten";
import { Button, Layout } from "react-native-ui-kitten";

export const Container = styled(Layout)`
  flex: 1;
  margin: 20px 20px;
`;

export const Info = styled(Text)`
  margin-bottom: 20px;
  text-align: center;
`;
export const LanguageBtn = styled(Button)`
  margin: 10px 20px;
`;

export const List = styled.FlatList`
  flex: 1;
`;

export const styles = StyleSheet.create({
  button: {
    marginVertical: 10
  }
});
