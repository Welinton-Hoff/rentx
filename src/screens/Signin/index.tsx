import {
  Alert,
  Keyboard,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import * as Yup from "yup";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/Auth";
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

export function SignIn() {
  const { signIn } = useAuth();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSignIn(): Promise<void> {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate({ email, password });

      signIn({ email, password });
    } catch (error: unknown | Yup.ValidationError) {
      getAuthenticationError(error);
    }
  }

  function onCreateNewAccount(): void {
    navigation.navigate("InitialData");
  }

  function getAuthenticationError(error: unknown | Yup.ValidationError) {
    if (error instanceof Yup.ValidationError) {
      return Alert.alert("Ops!", error.message);
    }

    return Alert.alert(
      "Ops!",
      "Erro na autenticação, verifique as credencias."
    );
  }

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
              onPress={onSignIn}
            />

            <CreateAccountButton
              isLoading={false}
              isDisabled={false}
              onPress={onCreateNewAccount}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
