import React from "react";
import { StatusBar } from "react-native";

import { CarCard } from "../../components/CarCard";

import {
  Header,
  CarList,
  RentxLogo,
  Container,
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
  thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
};

export function Home() {
  const renderItem = () => {
    return <CarCard data={carData} />;
  };

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

      <CarList
        data={[1, 2, 3]}
        renderItem={renderItem}
        keyExtractor={(item) => String(item)}
      />
    </Container>
  );
}
