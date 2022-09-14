import { format } from "date-fns";
import { Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { getPlatformDate } from "../../utils/Date";
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
  const [scheduling, setScheduling] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalSchema>(
    {} as RentalSchema
  );

  const route = useRoute();
  const navigation = useNavigation();
  const { car, dates } = route.params as ParamsSchema;
  const rentTotal = Number(dates.length * car.price);

  function handleGoBackScheduling(): void {
    navigation.goBack();
  }

  function onNavigateSuccessFeedback(): void {
    navigation.navigate("SuccessFeedback", {
      title: "Carro alugado!",
      navigateToNextRoute: "Home",
      message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.`,
    });
  }

  async function handleConfirmRental(): Promise<void> {
    try {
      setScheduling(true);

      const response = await api.get(`/schedules_bycars/${car.id}`);
      const unavailable_dates = [...response.data.unavailable_dates, ...dates];

      const scheduleCarByUser = await api.post("schedules_byuser", {
        user_id: 1,
        car,
        startDate: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
        endDate: format(
          getPlatformDate(new Date(dates[dates.length - 1])),
          "dd/MM/yyyy"
        ),
      });

      const scheduleCar = await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      });

      if (scheduleCar.status === 200 && scheduleCarByUser.status === 201) {
        return onNavigateSuccessFeedback();
      }
    } catch (error) {
      Alert.alert("Agendamento", "Não foi possível confirmar o agendamento.");
    }
  }

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
            <Period>{car?.period}</Period>
            <Price>R$ {car?.price}</Price>
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
            <RentalPriceQuota>{`R$ ${car.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <RentNowButton
          title="Alugar agora"
          isLoading={scheduling}
          isDisabled={scheduling}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
