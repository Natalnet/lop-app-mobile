import React, { useCallback, useState, useEffect, useRef } from 'react';
import Modal from 'react-native-modal';
import {
  Container,
  WebWindow,
  ButtonsView,
  ModalSwitchButton,
  ModalSwitchText,
  IdeView,
} from './styles';

import ModalQuestion from '../../components/ModalQuestion';

const SolveProblem: React.FC = ({ route }) => {
  const [question, setQuestion] = useState({});
  const [showModalQuestion, setShowModalQuestion] = useState(false);
  const [showModalAnswer, setShowModalAnswer] = useState(false);
  const webRef = useRef();

  useEffect(() => {
    setQuestion(route.params.question);
  }, [route.params]);

  const onMessage = useCallback((event) => {
    console.log(event.nativeEvent.data);
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
    </Container>
  );
};

export default SolveProblem;
