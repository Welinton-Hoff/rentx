import { StatusBar } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { Fragment, useCallback, useEffect, useState } from "react";

import {
  Extrapolate,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { Car as ModelCar } from "../../database/model/Car";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { Slider } from "../../components/Slider";
import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ModalFeedback } from "../../components/ModalFeedback";

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
  LoadIndicator,
  HeaderAnimated,
  ScrollAnimated,
  CarAnimatedImages,
} from "./styles";

interface ParamsSchema {
  car: ModelCar;
}

export function CarDetails() {
  const [loaderFeedback, setLoaderFeedback] = useState(true);
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);
  const [isOffLineFeedbackVisible, displayOffLineFeedback] = useState(false);

  const route = useRoute();
  const netInfo = useNetInfo();
  const scrollY = useSharedValue(0);
  const navigation = useNavigation();
  const { car } = route.params as ParamsSchema;

  useEffect(() => {
    if (!netInfo.isConnected && !loaderFeedback) {
      onDisplayOffLineFeedback();
      return;
    }

    if (!!netInfo.isConnected) {
      fetchCarUpdated();
      return;
    }

    setTimeout(() => {
      setLoaderFeedback(false);
    }, 5000);
  }, [netInfo.isConnected]);

  async function fetchCarUpdated() {
    const { data } = await api.get(`/cars/${car.id}`);

    setCarUpdated(data);
    setLoaderFeedback(false);
  }

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

  function getSliderImage() {
    return !!carUpdated.photos
      ? carUpdated.photos
      : [{ id: car.thumbnail, photo: car.thumbnail }];
  }

  function getCarPrice() {
    return !!netInfo.isConnected ? car?.price : "...";
  }

  function onDisplayOffLineFeedback(): void {
    displayOffLineFeedback(!isOffLineFeedbackVisible);
  }

  const AccessoriesCar = useCallback(() => {
    if (!!netInfo.isConnected && carUpdated?.accessories) {
      return (
        <Accessories>
          {carUpdated?.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>
      );
    }

    return null;
  }, [carUpdated, netInfo.isConnected]);

  const Content = useCallback(() => {
    if (loaderFeedback) {
      return <LoadIndicator />;
    }

    return (
      <Fragment>
        <Details>
          <Description>
            <Brand>{car?.brand}</Brand>
            <CarName>{car?.name}</CarName>
          </Description>

          <Rent>
            <Period>{car?.period}</Period>
            <Price>R$ {getCarPrice()}</Price>
          </Rent>
        </Details>

        <AccessoriesCar />

        <About>{car?.about}</About>
      </Fragment>
    );
  }, [car, loaderFeedback]);

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
          <Slider imagesUrl={getSliderImage()} />
        </CarAnimatedImages>
      </HeaderAnimated>

      <ScrollAnimated onScroll={scrollHandler} scrollEventThrottle={16}>
        <Content />
      </ScrollAnimated>

      <Footer>
        <Button
          onPress={handleConfirmRental}
          disabled={!netInfo.isConnected}
          title="Escolher período do aluguel"
        />
      </Footer>

      <ModalFeedback
        title="Ops!"
        buttonTitle="Continuar"
        buttonAction={onDisplayOffLineFeedback}
        isVisible={isOffLineFeedbackVisible && !loaderFeedback}
        message="Conecte-se a Internet para ver mais detalhes e efetuar o seu agendamento."
      />
    </Container>
  );
}
