import {
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
import { ModalFeedback } from "../../../components/ModalFeedback";
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
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isFailureFeedbackVisible, displayFailureFeedback] = useState(false);

  async function onRegister(): Promise<void> {
    if (!password || !confirmPassword) {
      setFeedbackMessage("Informe a senha e confirme-a.");
      return handleDisplaySignOutFeedback();
    }

    if (password !== confirmPassword) {
      setFeedbackMessage("Por favor, revise sua senha.");
      return handleDisplaySignOutFeedback();
    }

    await api
      .post("/users", {
        password,
        name: userData.name,
        email: userData.email,
        driver_license: userData.driverLicense,
      })
      .then(() => onNavigateSuccessFeedback())
      .catch(() => {
        handleDisplaySignOutFeedback();
        setFeedbackMessage(
          "Algo de inesperado ocorreu, por favor tente novamente mais tarde."
        );
      });
  }

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

  function handleDisplaySignOutFeedback(): void {
    displayFailureFeedback(!isFailureFeedbackVisible);
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

          <ModalFeedback
            title="Ops!"
            buttonTitle="Continuar"
            message={feedbackMessage}
            isVisible={isFailureFeedbackVisible}
            buttonAction={handleDisplaySignOutFeedback}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
