import { parseISO } from "date-fns";
import { format } from "date-fns/esm";
import { ListRenderItem, StatusBar } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { Fragment, useCallback, useEffect, useState } from "react";

import api from "../../services/api";
import { Car as ModelCar } from "../../database/model/Car";

import { CarCard } from "../../components/CarCard";
import { LoaderAnimated } from "../../components/LoaderAnimated";

import {
  Title,
  Header,
  Content,
  CarList,
  SubTitle,
  Container,
  HeaderButton,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
} from "./styles";

interface CarSchema {
  id: string;
  car: ModelCar;
  end_date: string;
  start_date: string;
}

export function MyCars() {
  const [isLoading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarSchema[]>([]);

  const navigation = useNavigation();
  const screenIsFocused = useIsFocused();

  useEffect(() => {
    fetchCars();
  }, [screenIsFocused]);

  async function fetchCars(): Promise<void> {
    try {
      const response = await api.get("/rentals");
      const data = response.data.map((data) => {
        return {
          id: data.id,
          car: data.car,
          start_date: format(parseISO(data.start_date), "dd/MM/yyyy"),
          end_date: format(parseISO(data.end_date), "dd/MM/yyyy"),
        };
      });

      setCars(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleBackToHome(): void {
    navigation.goBack();
  }

  const renderItem: ListRenderItem<CarSchema> = ({ item }) => {
    return (
      <CarCard
        data={item.car}
        endDate={item.end_date}
        startDate={item.start_date}
      />
    );
  };

  const ContentBody = useCallback(() => {
    if (isLoading) {
      return <LoaderAnimated />;
    }

    return (
      <Fragment>
        <Appointments>
          <AppointmentsTitle>Agendamentos realizados</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>

        <CarList
          data={cars}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Fragment>
    );
  }, [cars, isLoading]);

  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />

        <HeaderButton onPress={handleBackToHome} />

        <Title>
          Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
        </Title>

        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>

      <Content>
        <ContentBody />
      </Content>
    </Container>
  );
}
