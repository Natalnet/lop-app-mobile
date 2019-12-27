import styled from "styled-components/native";
import { colors } from "../../styles/mainStyles";

export const Container = styled.View`
  background: ${colors.prim1};
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  elevation: 4;
`;
export const IconNameView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;
export const FotoView = styled.View`
  width: 42px;
  height: 42px;
  background: ${colors.sec1};
  margin: 0 20px;
  border-radius: 21px;
  elevation: 6px;
`;
export const NameText = styled.Text`
  margin-left: 5px;
  color: ${colors.sec1};
  font-size: 18px;
`;
export const MenuBtn = styled.TouchableOpacity`
  margin: 0 20px;
  justify-content: center;
  align-items: center;
`;
export const BackBtn = styled.TouchableOpacity`
  margin-right: 30px;
  justify-content: center;
  align-items: center;
`;
