import React from "react";
import { StatusBar } from "react-native";

import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  TitleHeader,
  HeaderButton,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Content,
} from "./styles";

export function Scheduling() {
  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />

        <HeaderButton onPress={() => {}} />
        <TitleHeader>
          Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
        </TitleHeader>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content></Content>

      <Footer>
        <Button title="Confirmar" onPress={() => {}} />
      </Footer>
    </Container>
  );
}
