import React, { useState, useCallback, useEffect } from 'react';
import { TextInputProps } from 'react-native';

import IconMD from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import { Container, Input, IconContent, TextError, InputView } from './styles';

interface Props extends TextInputProps {
  label: string;
  iconName: string;
  errMsg: string;
}

const InputPaper: React.FC<Props> = ({
  iconName,
  label,
  errMsg,
  value,
  ...rest
}) => {
  const [isDarken, setIsDarken] = useState(false);
  const endEditing = useCallback(() => {
    if (value?.length > 0) {
      setIsDarken(true);
    } else {
      setIsDarken(false);
    }
  }, [value]);

  useEffect(() => {
    if (value && value.length > 0) {
      setIsDarken(true);
    }
  }, [value]);

  return (
    <>
      <Container>
        <InputView>
          <IconContent isDarken={isDarken}>
            <IconMD name={iconName} size={22} color={colors.sec1} />
          </IconContent>
          <Input
            onFocus={() => {
              setIsDarken(true);
            }}
            onEndEditing={endEditing}
            label={label}
            value={value}
            {...rest}
            mode="outlined"
          />
        </InputView>
        {!!errMsg && <TextError>{errMsg}</TextError>}
      </Container>
    </>
  );
};

export default InputPaper;
