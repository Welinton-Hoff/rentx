import { format } from "date-fns/esm";
import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { CarDTO } from "../../dtos/CarDTO";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { generateInterval } from "../../utils/generateInterval";

import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  MarkedDateSchema,
} from "../../components/Calendar";

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

interface RentalSchema {
  endFormatted: string;
  startFormatted: string;
}

interface ParamsSchema {
  car: CarDTO;
}

export function Scheduling() {
  const route = useRoute();
  const navigation = useNavigation();
  const { car } = route.params as ParamsSchema;

  const [rentalPeriod, setRentalPeriod] = useState<RentalSchema>(
    {} as RentalSchema
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateSchema>(
    {} as MarkedDateSchema
  );
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );

  const handleSchedulingDetails = () => {
    navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
  };

  const handleGoBackCarDetails = () => {
    navigation.goBack();
  };

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
    });
  };

  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />

        <HeaderButton onPress={handleGoBackCarDetails} />

        <TitleHeader>
          Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
        </TitleHeader>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={handleSchedulingDetails}
          isDisabled={!rentalPeriod.startFormatted}
        />
      </Footer>
    </Container>
  );
}
