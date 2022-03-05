import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

import {
  Header,
  Footer,
  Content,
  DateInfo,
  Container,
  DateTitle,
  DateValue,
  TitleHeader,
  RentalPeriod,
  HeaderButton,
} from "./styles";

export function Scheduling() {
  const navigation = useNavigation();

  const handleSchedulingDetails = () => {
    navigation.navigate("SchedulingDetails");
  };

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

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleSchedulingDetails} />
      </Footer>
    </Container>
  );
}
