import React from "react";
import { TouchableOpacityProps } from "react-native";

import GasolineSvg from "../../assets/gasoline.svg";

import {
  Rent,
  Type,
  Brand,
  About,
  Price,
  Period,
  CarName,
  Details,
  CarImage,
  Container,
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

interface CarCardProps extends TouchableOpacityProps {
  data: CarCardData;
}

export function CarCard(props: CarCardProps) {
  const { data, ...rest } = props;

  return (
    <Container {...rest} activeOpacity={0.7}>
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
