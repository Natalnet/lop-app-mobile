import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface InputRequest {
  isErr: boolean;
}

export const Container = styled.View`
  margin-bottom: 20px;
`;
export const InputContainer = styled.View`
  flex-direction: row;
  height: 40px;
`;

export const ViewIcon = styled.View`
  background: ${colors.prim2};
  width: 40px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  border-width: 1px;
  border-color: ${({ isErr }: InputRequest) =>
    isErr ? colors.danger1 : colors.prim1};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0 10px;
`;

export const TextError = styled.Text`
  margin: 5px;
  font-size: 12px;
  color: ${colors.danger1};
`;
