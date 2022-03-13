import { ListRenderItem, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { CarCard } from "../../components/CarCard";
import { LoadView } from "../../components/LoadView";

import {
  Header,
  CarIcon,
  CarList,
  RentxLogo,
  Container,
  TotalCars,
  MyCarsButton,
  HeaderContent,
} from "./styles";

export function Home() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [carData, setCarData] = useState<CarDTO[]>([]);

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate("CarDetails", { car });
  };

  const handleOpenMyCars = () => {
    navigation.navigate("MyCars");
  };

  const renderItem: ListRenderItem<CarDTO> = useCallback(
    (props) => {
      const { item } = props;
      return <CarCard data={item} onPress={() => handleCarDetails(item)} />;
    },
    [carData]
  );

  const ApiResponse = () => {
    if (isLoading) {
      return <LoadView />;
    }

    return (
      <CarList
        data={carData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCarData(response.data);
      } catch (error) {
        console.log("error ==> ", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Header>
        <HeaderContent>
          <RentxLogo />
          <TotalCars>Total de {carData?.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      <ApiResponse />

      <MyCarsButton onPress={handleOpenMyCars}>
        <CarIcon />
      </MyCarsButton>
    </Container>
  );
}
