import React, { useEffect, useState } from "react";
import { ListRenderItem, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

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

interface CarShema {
  id: string;
  car: CarDTO;
  user_id: string;
  endDate: string;
  startDate: string;
}

export function MyCars() {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarShema[]>([]);

  const handleBackToHome = () => {
    navigation.goBack();
  };

  const renderItem: ListRenderItem<CarShema> = ({ item }) => {
    return (
      <CarCard
        data={item.car}
        endDate={item.endDate}
        startDate={item.startDate}
      />
    );
  };

  const HasContent = () => {
    if (isLoading) {
      return <LoaderAnimated />;
    }

    return (
      <>
        <Appointments>
          <AppointmentsTitle>Agendamentos realizados</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>

        <CarList
          data={cars}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </>
    );
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("schedules_byuser?user_id=1");
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchCars();
  }, []);

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
        <HasContent />
      </Content>
    </Container>
  );
}
