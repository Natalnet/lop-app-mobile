import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const QuestionContainer = styled.View`
  flex: 1;
  background: ${colors.sec1};
`;
export const QuestionContentScroll = styled.ScrollView``;
export const QuestionHeader = styled.View`
  background: ${colors.prim1};
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
`;
export const QuestionTitle = styled.Text`
  color: ${colors.sec1};
  font-size: 18px;
  text-align: center;
`;
export const QuestionDescription = styled.Text`
  color: ${colors.text1};
  font-size: 16px;
  padding: 30px 10px;
  text-align: left;
  letter-spacing: 0.5px;
`;
export const QuestionInfo = styled.View`
  flex-direction: row;
`;
export const QuestionInfoLabel = styled(QuestionDescription)`
  padding: 10px 5px 10px 10px;
  color: ${colors.prim2};
  font-weight: bold;
`;
export const QuestionInfoText = styled(QuestionDescription)`
  padding: 10px 5px;
`;
export const QuestionInfoTag = styled.View``;
export const QuestionInfoTagText = styled(QuestionDescription)`
  padding: 10px;
`;
