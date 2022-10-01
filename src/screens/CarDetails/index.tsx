import React from "react";
import { StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Extrapolate,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { CarDTO } from "../../dtos/CarDTO";
import { Slider } from "../../components/Slider";
import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import {
  Rent,
  Price,
  Brand,
  About,
  Header,
  Footer,
  Period,
  Details,
  CarName,
  Container,
  Description,
  Accessories,
  HeaderAnimated,
  ScrollAnimated,
  CarAnimatedImages,
} from "./styles";

interface ParamsSchema {
  car: CarDTO;
}

export function CarDetails() {
  const route = useRoute();
  const scrollY = useSharedValue(0);
  const navigation = useNavigation();
  const { car } = route.params as ParamsSchema;

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  const sliderStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 100], [1, 0], Extrapolate.CLAMP),
    };
  });

  function handleConfirmRental(): void {
    navigation.navigate("Scheduling", { car });
  }

  function handleGoBackHome(): void {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <HeaderAnimated style={[headerStyleAnimation]}>
        <Header>
          <BackButton onPress={handleGoBackHome} />
        </Header>

        <CarAnimatedImages style={sliderStyleAnimation}>
          <Slider imagesUrl={car?.photos} />
        </CarAnimatedImages>
      </HeaderAnimated>

      <ScrollAnimated onScroll={scrollHandler} scrollEventThrottle={16}>
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
          {car?.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car?.about}</About>
      </ScrollAnimated>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
