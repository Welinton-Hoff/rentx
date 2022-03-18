import {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import { ListRenderItem, StatusBar, BackHandler } from "react-native";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { CarCard } from "../../components/CarCard";
import { LoaderAnimated } from "../../components/LoaderAnimated";

import {
  Header,
  CarIcon,
  CarList,
  RentxLogo,
  Container,
  TotalCars,
  MyCarsButton,
  AnimatedView,
  HeaderContent,
} from "./styles";

export function Home() {
  const navigation = useNavigation();
  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const [isLoading, setLoading] = useState(true);
  const [carData, setCarData] = useState<CarDTO[]>([]);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

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

  const FetchCars = () => {
    if (isLoading) {
      return <LoaderAnimated />;
    }

    return (
      <CarList
        data={carData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  const CountCars = () => {
    if (isLoading) {
      return null;
    }

    return <TotalCars>Total de {carData?.length} carros</TotalCars>;
  };

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCarData(response.data);
      } catch (error) {
        console.log("error ==> ", error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }

    fetchCars();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
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
          <CountCars />
        </HeaderContent>
      </Header>

      <FetchCars />

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <AnimatedView style={myCarsButtonStyle}>
          <MyCarsButton onPress={handleOpenMyCars}>
            <CarIcon />
          </MyCarsButton>
        </AnimatedView>
      </PanGestureHandler>
    </Container>
  );
}
