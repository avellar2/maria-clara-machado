import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { CardStudent } from '../../components/CardStudent';
import { Input } from '../../components/Input';
import { TitleInfo } from '../../components/TitleInfo';
import {
  Container, Content, Greeting, Header, Icon, InputContet,
} from './styles';

export function StudentList() {
  const [student, setStudent] = useState<string[]>([
    'Ana Clara',
    'Miguel angelo',
    'João Victor',
    'dsdasd',
    'dasdadd',
    'dasdasd,',
    'dasdavv',
    'asdasd',
    'ddddddd',
    'dasdasd',
    'dasd',

  ]);

  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Greeting>Olá atendente Vanderson 😃</Greeting>
      </Header>

      <Content>
        <InputContet>
          <Icon size={20} weight="bold" color={theme.stroke} />
          <Input placeholder="Pesquisar" />
        </InputContet>

        <TitleInfo title="Listagem de alunos" />

        <FlatList
          contentContainerStyle={{ paddingBottom: 25 }}
          showsVerticalScrollIndicator
          data={student}
          keyExtractor={(item) => item}
          renderItem={(item) => (
            <CardStudent
              name={item.item}
            />
          )}
        />

      </Content>
    </Container>
  );
}
