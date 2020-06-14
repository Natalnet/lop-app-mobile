import React from 'react';
import { TextInputProps } from 'react-native';

import IconMD from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import {
  Container,
  InputContainer,
  ViewIcon,
  Input,
  TextError,
} from './styles';

interface PropsTypes extends TextInputProps {
  label: string;
  iconName: string;
  errMsg: string;
}

const InputWithIcon: React.FC<PropsTypes> = ({
  label,
  iconName,
  errMsg,
  ...rest
}: PropsTypes) => {
  return (
    <Container>
      <InputContainer>
        <ViewIcon>
          <IconMD name={iconName} size={22} color={colors.sec1} />
        </ViewIcon>
        <Input placeholder={label} {...rest} isErr={!!errMsg} />
      </InputContainer>
      {!!errMsg && <TextError>{errMsg}</TextError>}
    </Container>
  );
};

export default InputWithIcon;
