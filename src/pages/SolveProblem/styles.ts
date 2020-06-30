import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const ExitButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 5px;
  width: 70px;
  height: 30px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${colors.prim1};
`;
export const ExitButtonText = styled.Text`
  font-size: 14px;
  color: ${colors.sec1};
`;

export const WebWindow = styled(WebView)`
  flex: 1;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ModalSwitchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  border-color: ${colors.sec1};
  border-width: 1px;
  padding: 5px;
  height: 40px;
  background: ${colors.prim2};
`;
export const ModalSwitchText = styled.Text`
  color: #ffffff;
`;
export const IdeView = styled.TouchableWithoutFeedback`
  flex: 1;
  flex-direction: row;
`;
