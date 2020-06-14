import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

export const Container = styled.View`
  flex: 1;
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
  border-color: #ffffff;
  border-width: 1px;
  padding: 5px;
  height: 40px;
  background: #44aaf2;
`;
export const ModalSwitchText = styled.Text`
  color: #ffffff;
`;
export const ModalContainer = styled.View`
  flex: 1;
  background: #fff;
`;
export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  margin: 10px;
  background: #dc3545;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;
export const CloseButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
export const IdeView = styled.TouchableWithoutFeedback`
  flex: 1;
  flex-direction: row;
`;
