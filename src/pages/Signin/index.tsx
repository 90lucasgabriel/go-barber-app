import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signin: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu Login</Title>

      <Input name="email" icon="mail"  placeholder="E-mail" />
      <Input name="password" icon="lock"  placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('press');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default Signin;
