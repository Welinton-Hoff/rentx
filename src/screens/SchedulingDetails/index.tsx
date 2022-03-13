import { format } from "date-fns";
import { Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { Slider } from "../../components/Slider";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";

import {
  Rent,
  Price,
  Brand,
  Header,
  Footer,
  Period,
  Content,
  Details,
  CarName,
  DateInfo,
  DateTitle,
  DateValue,
  CarImages,
  Container,
  Accessories,
  Description,
  ChevronIcon,
  RentalPrice,
  CalendarIcon,
  RentalPeriod,
  RentNowButton,
  RentalPriceLabe,
  RentalPriceQuota,
  RentalPriceTotal,
  RentalPriceDetails,
  CalendarIconContainer,
} from "./styles";

interface ParamsSchema {
  car: CarDTO;
  dates: string[];
}

interface RentalSchema {
  endFormatted: string;
  startFormatted: string;
}

export function SchedulingDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalSchema>(
    {} as RentalSchema
  );

  const route = useRoute();
  const navigation = useNavigation();
  const { car, dates } = route.params as ParamsSchema;
  const rentTotal = Number(dates.length * car.rent.price);

  const handleConfirmRental = async () => {
    try {
      const response = await api.get(`/schedules_bycars/${car.id}`);
      const unavailable_dates = [...response.data.unavailable_dates, ...dates];

      const scheduleCar = await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      });

      if (scheduleCar.status === 200) {
        return navigation.navigate("SchedulingComplete");
      }
    } catch (error) {
      Alert.alert("Agendamento", "Não foi possível confirmar o agendamento.");
    }
  };

  const handleGoBackScheduling = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const startDate = format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy");
    const endDate = format(
      getPlatformDate(new Date(dates[dates.length - 1])),
      "dd/MM/yyyy"
    );

    setRentalPeriod({
      startFormatted: startDate,
      endFormatted: endDate,
    });
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBackScheduling} />
      </Header>

      <CarImages>
        <Slider imagesUrl={car.photos} />
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
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIconContainer>
            <CalendarIcon />
          </CalendarIconContainer>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <ChevronIcon />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabe>TOTAL</RentalPriceLabe>

          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <RentNowButton title="Alugar agora" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
