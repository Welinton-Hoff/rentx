import React from "react";
import { TouchableOpacityProps } from "react-native";

import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

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

interface CarCardProps extends TouchableOpacityProps {
  data: CarDTO;
}

export function CarCard(props: CarCardProps) {
  const { data, ...rest } = props;
  const MotorICon = getAccessoryIcon(data.fuel_type);

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
            <MotorICon />
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
