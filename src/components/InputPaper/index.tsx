import React, { useState, useCallback, useEffect } from 'react';
import { TextInputProps } from 'react-native';

import IconMD from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import { Container, Input, IconContent } from './styles';

interface Props extends TextInputProps {
  label: string;
  iconName: string;
}

const InputPaper: React.FC<Props> = ({ iconName, label, value, ...rest }) => {
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
    <Container>
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
    </Container>
  );
};

export default InputPaper;
