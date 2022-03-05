import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

export function SchedulingComplete() {
  const navigation = useNavigation();

  const handleRentalComplete = () => {
    navigation.navigate("Home");
  };

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
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>

        <Footer>
          <ConfirmButton title="Ok" onPress={handleRentalComplete} />
        </Footer>
      </Content>
    </Container>
  );
}
