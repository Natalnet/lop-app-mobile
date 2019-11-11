import styled from 'styled-components/native';
import { colors } from '../../styles/mainStyles';

export const Container = styled.View`
  margin: 20px;
  flex: 1;
  justify-content: center;
`;
export const LabelInputView = styled.View`
  align-items: baseline;
  margin-bottom: 20px;
`;
export const Label = styled.Text`
  color: ${colors.prim1};
`;
export const Input = styled.TextInput`
  border-bottom-width: 2px;
  border-bottom-color: ${colors.prim1};
  color: ${colors.tert1};
  padding: 3px 10px 3px 10px;
  font-size: 18px;
  align-self: stretch;
`;
export const SubmitView = styled.View`
  justify-content: center;
  align-items: center;
`;
export const ErrMsg = styled.Text`
  color: ${colors.err1};
  font-size: 14px;
  margin-bottom: 8px;
`;
export const Btn = styled.TouchableOpacity`
  border-width: 3px;
  border-color: ${colors.prim1};
  padding: 5px 20px;
  margin-bottom: 20px;
`;
export const BtnText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.prim1};
  text-transform: uppercase;
`;
export const SwitchBtn = styled(Btn)`
  background: ${props => (props.active ? colors.prim1 : colors.sec1)};
`;
export const SwitchBtnText = styled(BtnText)`
  color: ${props => (props.active ? colors.sec1 : colors.prim1)};
`;
export const EsqueceuView = styled.View``;
