import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import api from "../../../services/api";
import { userDataSchema } from "../InitialData";
import { Input } from "../../../components/Input";
import { BackButton } from "../../../components/BackButton";
import { PaginationIndicator } from "../../../components/PaginationIndicator";

import {
  Title,
  Header,
  FormView,
  SubTitle,
  FormTitle,
  Container,
  StepIndicator,
  RegisterButton,
} from "./styles";

interface dataSchema {
  userData: userDataSchema;
}

export function CreatePassword() {
  const route = useRoute();
  const navigation = useNavigation();
  const { userData } = route.params as dataSchema;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function onGoBackNavigate(): void {
    navigation.goBack();
  }

  function onNavigateSuccessFeedback(): void {
    navigation.navigate("SuccessFeedback", {
      title: "Conta criada!",
      navigateToNextRoute: "SignIn",
      message: `Agora é so fazer login\ne aproveitar.`,
    });
  }

  async function onRegister(): Promise<void> {
    if (!password || !confirmPassword) {
      return Alert.alert("Informe a senha e confirme-a.");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Por favor, revise sua senha.");
    }

    await api
      .post("/users", {
        password,
        name: userData.name,
        email: userData.email,
        driverLicense: userData.driverLicense,
      })
      .then(() => onNavigateSuccessFeedback())
      .catch((error: any) => {
        console.log("error => ", error.message);
        Alert.alert(
          "Ops",
          "Algo de inesperado ocorreu, por favor tente novamente mais tarde."
        );
      });
  }

  return (
    <KeyboardAvoidingView enabled behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={onGoBackNavigate} />
            <StepIndicator>
              <PaginationIndicator />
              <PaginationIndicator isActive />
            </StepIndicator>
          </Header>

          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil</SubTitle>

          <FormView>
            <FormTitle>2. Senha</FormTitle>

            <Input
              isPassword
              icon="lock"
              value={password}
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
            />

            <Input
              isPassword
              icon="lock"
              autoCorrect={false}
              autoCapitalize="none"
              value={confirmPassword}
              placeholder="Repetir Senha"
              onChangeText={setConfirmPassword}
            />
          </FormView>

          <RegisterButton title="Cadastrar" onPress={onRegister} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
