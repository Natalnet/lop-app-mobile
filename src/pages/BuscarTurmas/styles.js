import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Input } from "react-native-ui-kitten";
import { colors } from "../../styles/mainStyles";

export const Container = styled.View`
  flex: 1;
`;
export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled(Input)`
  margin-bottom: 10px;
`;

export const ViewClass = styled.View`
  margin: 10px 20px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.sec2};
  padding-bottom: 15px;
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TextClassCodeText = styled.Text`
  color: ${colors.sec3};
  font-size: 12px;
`;
export const TextClassTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
export const TextDescriptionClass = styled.Text`
  margin-top: 3px;
  max-width: 250px;
  color: ${colors.tert2};
`;
export const BtnClass = styled(RectButton)`
  background: ${colors.prim1};
  padding: 10px 15px;
  border-radius: 4px;
  elevation: 4;
`;
export const TextBtnClass = styled.Text`
  color: ${colors.sec1};
  text-transform: uppercase;
`;
