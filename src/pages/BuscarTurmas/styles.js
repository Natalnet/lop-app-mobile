import styled from 'styled-components/native';
import { colors } from '../../styles/mainStyles';

export const Container = styled.View``;
export const BuscarView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  elevation: 2;
`;
export const InputBuscar = styled.TextInput`
  flex: 1;
  padding: 10px 10px;
  margin: 0 20px;
  color: ${colors.prim1};
  font-size: 16px;
`;
export const BuscarBtn = styled.TouchableOpacity`
  margin: 0 20px;
`;
export const ListTurmas = styled.FlatList`
  margin: 10px 20px 50px 20px;
`;

export const TurmaContainer = styled.View`
  background: ${colors.prim1};
  margin: 10px 0;
  padding: 10px;
  justify-content: center;
  align-items: center;
  elevation: 4;
`;
export const Title = styled.Text`
  text-align: center;
  color: ${colors.sec1};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const CriadaText = styled.Text`
  font-size: 16px;
  color: ${colors.sec1};
  margin-bottom: 15px;
  align-self: flex-start;
`;
export const CriadorText = styled.Text`
  font-weight: bold;
`;
export const AdicionarBtn = styled.TouchableOpacity`
  padding: 5px 30px;
  background: ${colors.suc1};
  elevation: 5;
  margin-bottom: 10px;
`;
export const AdicionarBtnText = styled.Text`
  color: ${colors.sec1};
  font-size: 16px;
`;
