import React from "react";
import { StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ConfirmButton } from "../../components/ConfirmButton";

import {
  Title,
  Footer,
  DoneSvg,
  Content,
  Message,
  LogoSvg,
  Container,
} from "./styles";

interface SuccessFeedbackProps {
  title: string;
  message: string;
  navigateToNextRoute: keyof ReactNavigation.RootParamList;
}

export function SuccessFeedback() {
  const route = useRoute();
  const navigation = useNavigation();
  const { title, message, navigateToNextRoute } =
    route.params as SuccessFeedbackProps;

  function handleRentalComplete(): void {
    navigation.navigate(navigateToNextRoute);
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <LogoSvg />
      <Content>
        <DoneSvg />
        <Title>{title}</Title>
        <Message>{message}</Message>
        <Footer>
          <ConfirmButton title="Ok" onPress={handleRentalComplete} />
        </Footer>
      </Content>
    </Container>
  );
}
