import React, { useCallback } from "react";
import { ListRenderItem, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CarCard } from "../../components/CarCard";

import {
  Header,
  CarList,
  RentxLogo,
  Container,
  TotalCars,
  HeaderContent,
} from "./styles";

interface carDataSchema {
  id: number;
  name: string;
  brand: string;
  rent: {
    price: number;
    period: string;
  };
  thumbnail: string;
}

const carData: carDataSchema[] = [
  {
    id: 0,
    name: "Audi",
    brand: "RS 5 Coupé",
    rent: {
      price: 120,
      period: "Ao dia",
    },
    thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
  },
  {
    id: 1,
    name: "Audi",
    brand: "RS 5 Coupé",
    rent: {
      price: 120,
      period: "Ao dia",
    },
    thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
  },
  {
    id: 2,
    name: "Audi",
    brand: "RS 5 Coupé",
    rent: {
      price: 120,
      period: "Ao dia",
    },
    thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
  },
];

export function Home() {
  const navigation = useNavigation();

  const handleCarDetails = () => {
    navigation.navigate("CarDetails");
  };

  const renderItem: ListRenderItem<carDataSchema> = useCallback(
    (props) => {
      const { item } = props;
      return <CarCard data={item} onPress={handleCarDetails} />;
    },
    [carData]
  );

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
          <TotalCars>Total de {carData.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={carData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </Container>
  );
}
