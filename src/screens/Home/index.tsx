import React from "react";
import { StatusBar } from "react-native";

import { CarCard } from "../../components/CarCard";

import {
  Container,
  Header,
  RentxLogo,
  TotalCars,
  HeaderContent,
} from "./styles";

const carData = {
  name: "Audi",
  brand: "RS 5 Coupé",
  rent: {
    price: 120,
    period: "Ao dia",
  },
  thumbnail:
    "https://img1.gratispng.com/20180903/ufe/kisspng-2-18-audi-a5-audi-sportback-concept-car-audi-a5-sp-infiniti-g37-lease-infiniti-g37-sedan-image-158-5b8d3364bf92d9.6523616515359803887847.jpg",
};

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

      <CarCard data={carData} />
    </Container>
  );
}
