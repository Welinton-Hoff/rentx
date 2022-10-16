import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import { Car as ModelCar } from "../../database/model/Car";
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
  PeriodDate,
  ChevronIcon,
  RentalPeriod,
  PeriodWrapper,
  RentalPeriodTitle,
} from "./styles";

interface CarCardProps extends TouchableOpacityProps {
  data: ModelCar;
  endDate?: string;
  startDate?: string;
}

export function CarCard(props: CarCardProps) {
  const { data, endDate, startDate, ...rest } = props;

  const netInfo = useNetInfo();
  const MotorICon = getAccessoryIcon(data.fuel_type);

  function getCarPrice() {
    return !!netInfo.isConnected ? data?.price : "...";
  }

  const HasRentalPeriod = () => {
    if (startDate && endDate) {
      return (
        <RentalPeriod>
          <RentalPeriodTitle>Período</RentalPeriodTitle>

          <PeriodWrapper>
            <PeriodDate>{startDate}</PeriodDate>
            <ChevronIcon />
            <PeriodDate>{endDate}</PeriodDate>
          </PeriodWrapper>
        </RentalPeriod>
      );
    }

    return null;
  };

  return (
    <>
      <Container {...rest} activeOpacity={0.7}>
        <Details>
          <Brand>{data.brand}</Brand>
          <CarName>{data.name}</CarName>

          <About>
            <Rent>
              <Period>{data.period}</Period>
              <Price>R$ ${getCarPrice()}</Price>
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

      <HasRentalPeriod />
    </>
  );
}
