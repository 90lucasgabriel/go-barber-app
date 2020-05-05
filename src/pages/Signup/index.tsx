import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  BackToSignin,
  BackToSigninText,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua Conta</Title>
            </View>

            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button
              onPress={() => {
                console.log('press');
              }}
            >
              Entrar
            </Button>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignin onPress={() => {navigation.goBack()}}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSigninText>Voltar para Login</BackToSigninText>
      </BackToSignin>
    </>
  );
};

export default Signup;
