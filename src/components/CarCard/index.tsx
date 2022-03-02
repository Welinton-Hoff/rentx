import React from "react";

import GasolineSvg from "../../assets/gasoline.svg";

import {
  Container,
  Details,
  Brand,
  CarName,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

interface CarCardData {
  name: string;
  brand: string;
  rent: {
    price: number;
    period: string;
  };
  thumbnail: string;
}

interface CarCardProps {
  data: CarCardData;
}

export function CarCard({ data }: CarCardProps) {
  return (
    <Container>
      <Details>
        <Brand>{data.name}</Brand>
        <CarName>{data.brand}</CarName>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
