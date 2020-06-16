import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import colors from '../../styles/colors';

import { Container, Label } from './styles';

interface Request extends TouchableOpacityProps {
  children: ReactNode;
  color?: string;
}

const ButtonFilled: React.FC<Request> = ({
  children,
  color = colors.prim2,
  ...rest
}: Request) => {
  return (
    <Container color={color} {...rest}>
      <Label>{children}</Label>
    </Container>
  );
};

export default ButtonFilled;
