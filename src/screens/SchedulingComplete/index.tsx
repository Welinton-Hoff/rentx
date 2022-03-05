import React from "react";
import { StatusBar } from "react-native";

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
          <ConfirmButton title="Ok" />
        </Footer>
      </Content>
    </Container>
  );
}
