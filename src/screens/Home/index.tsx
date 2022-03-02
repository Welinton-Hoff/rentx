import React from "react";
import { StatusBar } from "react-native";

import {
  Container,
  Header,
  RentxLogo,
  TotalCars,
  HeaderContent,
} from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <Header>
        <HeaderContent>
          <RentxLogo />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
    </Container>
  );
}
