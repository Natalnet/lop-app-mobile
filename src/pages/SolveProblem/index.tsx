import React, { useCallback, useState, useRef } from 'react';
import Modal from 'react-native-modal';
import {
  Container,
  WebWindow,
  ButtonsView,
  ModalSwitchButton,
  ModalSwitchText,
  ModalContainer,
  CloseButton,
  CloseButtonText,
  IdeView,
  CharsView,
  CharBtn,
  CharBtnText,
} from './styles';

const SolveProblem: React.FC = () => {
  const [showModalQuestion, setShowModalQuestion] = useState(false);
  const [showModalAnswer, setShowModalAnswer] = useState(false);
  const webRef = useRef();

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
        <ModalContainer>
          <CloseButton onPress={() => setShowModalQuestion(!showModalQuestion)}>
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
        </ModalContainer>
      </Modal>
    ),
    [showModalQuestion],
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
