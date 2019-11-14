import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BuscarView,
  InputBuscar,
  BuscarBtn,
  ListTurmas,
  TurmaContainer,
  Title,
  CriadaText,
  CriadorText,
  AdicionarBtn,
  AdicionarBtnText,
} from './styles';

import { colors } from '../../styles/mainStyles';

import turmas from '../../dataTemp/turmas';

export default class BuscarTurmas extends Component {
  renderTurma = (nome, criada) => {
    return (
      <TurmaContainer>
        <Title>{nome}</Title>
        <CriadaText>
          Criada por: <CriadorText>{criada}</CriadorText>
        </CriadaText>
        <AdicionarBtn>
          <AdicionarBtnText>Adicionar Turma</AdicionarBtnText>
        </AdicionarBtn>
      </TurmaContainer>
    );
  };

  render() {
    return (
      <Container>
        <BuscarView>
          <InputBuscar placeholder="Buscar turmas" />
          <BuscarBtn>
            <Icon name="search" color={colors.prim1} size={28} />
          </BuscarBtn>
        </BuscarView>
        <ListTurmas
          data={turmas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderTurma(item.nome, item.criada)}
        />
      </Container>
    );
  }
}
