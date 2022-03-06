import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { CarDTO } from "../../dtos/CarDTO";
import { Slider } from "../../components/Slider";
import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import {
  Rent,
  Price,
  Brand,
  About,
  Header,
  Footer,
  Period,
  Content,
  Details,
  CarName,
  CarImages,
  Container,
  Description,
  Accessories,
} from "./styles";

interface ParamsSchema {
  car: CarDTO;
}

export function CarDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { car } = route.params as ParamsSchema;

  const handleConfirmRental = () => {
    navigation.navigate("Scheduling");
  };

  const handleGoBackHome = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBackHome} />
      </Header>

      <CarImages>
        <Slider imagesUrl={car?.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car?.brand}</Brand>
            <CarName>{car?.name}</CarName>
          </Description>

          <Rent>
            <Period>{car?.rent.period}</Period>
            <Price>R$ {car?.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car?.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car?.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
