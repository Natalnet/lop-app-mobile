import styled from "styled-components/native";

export const Container = styled.View``;
import { RectButton } from "react-native-gesture-handler";
import { colors } from "../../styles/mainStyles";

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ViewList = styled.View`
  margin: 10px 20px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.sec2};
  padding-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TextListCodeText = styled.Text`
  color: ${colors.sec3};
  font-size: 12px;
`;
export const TextListTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
export const BtnList = styled(RectButton)`
  background: ${colors.prim1};
  padding: 10px 15px;
  border-radius: 4px;
  elevation: 4;
`;
export const TextBtnList = styled.Text`
  color: ${colors.sec1};
  text-transform: uppercase;
`;
