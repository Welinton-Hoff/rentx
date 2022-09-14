import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import * as Yup from "yup";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
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
} from "./styles";

export interface userDataSchema {
  name: string;
  email: string;
  driverLicense: string;
}

export function InitialData() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  function onGoBackNavigate(): void {
    navigation.goBack();
  }

  function onCreatePasswordPage(userData: userDataSchema): void {
    navigation.navigate("CreatePassword", { userData: userData });
  }

  async function onValidateForm(): Promise<void> {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatório"),
        email: Yup.string().required("E-mail é obrigatório"),
        name: Yup.string().required("Nome é obrigatório"),
      });

      const userData = { name, email, driverLicense };
      await schema.validate(userData);
      onCreatePasswordPage(userData);
    } catch (error: unknown | Yup.ValidationError) {
      getAuthenticationError(error);
    }
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
          <Header>
            <BackButton onPress={onGoBackNavigate} />
            <StepIndicator>
              <PaginationIndicator isActive />
              <PaginationIndicator />
            </StepIndicator>
          </Header>

          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil</SubTitle>

          <FormView>
            <FormTitle>1. Dados</FormTitle>

            <Input
              icon="user"
              value={name}
              placeholder="Nome"
              onChangeText={setName}
            />

            <Input
              icon="mail"
              value={email}
              placeholder="E-mail"
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Input
              placeholder="CNH"
              icon="credit-card"
              value={driverLicense}
              keyboardType="numeric"
              onChangeText={setDriverLicense}
            />
          </FormView>

          <Button title="Próximo" onPress={onValidateForm} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
