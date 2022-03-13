import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";
import { generateInterval } from "../../utils/generateInterval";
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

export function Scheduling() {
  const navigation = useNavigation();
  const [markedDates, setMarkedDates] = useState<MarkedDateSchema>(
    {} as MarkedDateSchema
  );
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );

  const handleSchedulingDetails = () => {
    navigation.navigate("SchedulingDetails");
  };

  const handleGoCarDetails = () => {
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
  };

  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />

        <HeaderButton onPress={handleGoCarDetails} />

        <TitleHeader>
          Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
        </TitleHeader>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleSchedulingDetails} />
      </Footer>
    </Container>
  );
}
