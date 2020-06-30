import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Picker } from '@react-native-community/picker';
import Modal from 'react-native-modal';
import {
  Container,
  Header,
  ExitButton,
  ExitButtonText,
  WebWindow,
  ButtonsView,
  ModalSwitchButton,
  ModalSwitchText,
  IdeView,
} from './styles';

import ModalQuestion from '../../components/ModalQuestion';

const SolveProblem: React.FC = ({ route }) => {
  const [question, setQuestion] = useState({});
  const [language, setLanguage] = useState('js');
  const [showModalQuestion, setShowModalQuestion] = useState(false);
  const [showModalAnswer, setShowModalAnswer] = useState(false);
  const webRef = useRef();

  useEffect(() => {
    setQuestion(route.params.question);
  }, [route.params]);

  const onMessage = useCallback((event) => {
    console.log(event.nativeEvent.data);
  }, []);

  const changeLanguage = useCallback((item) => {
    setLanguage(item);
    console.log(webRef.current);
    webRef.current.injectJavaScript(
      `document.getElementById('changeLanguage').textContent = "${item}"`,
    );
    webRef.current.injectJavaScript(
      `document.getElementById('changeLanguage').click()`,
    );
  }, []);

  const renderModalQuestion = useCallback(
    () => (
      <Modal
        isVisible={showModalQuestion}
        onBackdropPress={() => setShowModalQuestion(false)}
        backdropOpacity={0.5}
        animationIn="slideInDown"
        animationInTiming={500}
        animationOut="slideOutUp"
        animationOutTiming={300}
      >
        <ModalQuestion
          setIsModalVisible={setShowModalQuestion}
          question={question}
        />
      </Modal>
    ),
    [showModalQuestion, question],
  );
  return (
    <Container>
      {renderModalQuestion()}
      <Header>
        <Picker
          selectedValue={language}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => changeLanguage(itemValue)}
        >
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C++" value="cpp" />
        </Picker>
        <ExitButton>
          <ExitButtonText>Sair</ExitButtonText>
        </ExitButton>
      </Header>
      <ButtonsView>
        <ModalSwitchButton
          onPress={() => setShowModalQuestion(!showModalQuestion)}
        >
          <ModalSwitchText>Questão</ModalSwitchText>
        </ModalSwitchButton>
        <ModalSwitchButton onPress={() => setShowModalAnswer(!showModalAnswer)}>
          <ModalSwitchText>Resultados</ModalSwitchText>
        </ModalSwitchButton>
      </ButtonsView>
      <IdeView onLongPress={() => true} delayLongPress={10}>
        <WebWindow
          ref={webRef}
          source={{ uri: 'http://177.89.36.87:3000/' }}
          onMessage={onMessage}
        />
      </IdeView>
      {console.log(webRef.current)}
    </Container>
  );
};

export default SolveProblem;
