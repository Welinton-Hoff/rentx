import React from "react";
import { StatusBar } from "react-native";
import { Input } from "../../components/Input";

import {
  Title,
  Footer,
  Header,
  SubTitle,
  Container,
  LoginButton,
  CreateAccountButton,
  FormView,
} from "./styles";

export function Signin() {
  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Header>
        <Title>Estamos{"\n"}quase lá.</Title>

        <SubTitle>
          Faça o seu login para começar{"\n"}
          uma experiência incrível.
        </SubTitle>
      </Header>

      <FormView>
        <Input
          icon="mail"
          autoCorrect={false}
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Input
          isPassword
          icon="lock"
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </FormView>

      <Footer>
        <LoginButton isLoading={false} isDisabled={false} onPress={() => {}} />

        <CreateAccountButton
          isLoading={false}
          isDisabled={false}
          onPress={() => {}}
        />
      </Footer>
    </Container>
  );
}
