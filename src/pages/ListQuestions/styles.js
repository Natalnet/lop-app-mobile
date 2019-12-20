import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { colors } from "../../styles/mainStyles";

export const Container = styled.View`
  flex: 1;
  margin-bottom: 10px;
`;
export const ViewQuestion = styled.View`
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
export const TextQuestionCodeText = styled.Text`
  color: ${colors.sec3};
  font-size: 12px;
`;
export const TextQuestionTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
export const TextDescriptionQuestion = styled.Text`
  margin-top: 3px;
  max-width: 250px;
  color: ${colors.tert2};
`;
export const BtnQuestion = styled(RectButton)`
  background: ${colors.prim1};
  padding: 10px 15px;
  border-radius: 4px;
  elevation: 4;
`;
export const TextBtnQuestion = styled.Text`
  color: ${colors.sec1};
  text-transform: uppercase;
`;
