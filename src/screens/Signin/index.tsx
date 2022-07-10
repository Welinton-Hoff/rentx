import React, { useState } from "react";
import {
  Keyboard,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Input } from "../../components/Input";

import {
  Title,
  Footer,
  Header,
  SubTitle,
  FormView,
  Container,
  LoginButton,
  CreateAccountButton,
} from "./styles";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView enabled behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              value={email}
              autoCorrect={false}
              placeholder="E-mail"
              autoCapitalize="none"
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Input
              isPassword
              icon="lock"
              value={password}
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
            />
          </FormView>

          <Footer>
            <LoginButton
              isLoading={false}
              isDisabled={false}
              onPress={() => {}}
            />

            <CreateAccountButton
              isLoading={false}
              isDisabled={false}
              onPress={() => {}}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
