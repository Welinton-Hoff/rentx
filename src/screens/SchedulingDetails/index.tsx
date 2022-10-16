import { format } from "date-fns";
import { useNetInfo } from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState, Fragment } from "react";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { getPlatformDate } from "../../utils/Date";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { Slider } from "../../components/Slider";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ModalFeedback } from "../../components/ModalFeedback";

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
  LoadIndicator,
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
  const [failureMessage, setFailureMessage] = useState("");
  const [loaderFeedback, setLoaderFeedback] = useState(true);
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);
  const [isFailureFeedbackVisible, displayFailureFeedback] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalSchema>(
    {} as RentalSchema
  );

  const route = useRoute();
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const { car, dates } = route.params as ParamsSchema;
  const rentTotal = Number(dates.length * car.price);

  useEffect(() => {
    onRentalPeriod();
  }, []);

  useEffect(() => {
    if (!netInfo.isConnected && !loaderFeedback) {
      setFailureMessage(
        "Conecte-se a Internet para prosseguir com o seu agendamento."
      );

      displayFailureFeedback(true);
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

  function onRentalPeriod(): void {
    const startDate = format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy");
    const endDate = format(
      getPlatformDate(new Date(dates[dates.length - 1])),
      "dd/MM/yyyy"
    );

    setRentalPeriod({
      startFormatted: startDate,
      endFormatted: endDate,
    });
  }

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

  function getSliderImage() {
    return !!carUpdated.photos
      ? carUpdated.photos
      : [{ id: car.thumbnail, photo: car.thumbnail }];
  }

  function onCloseFailureFeedback(): void {
    setScheduling(false);
    displayFailureFeedback(false);
  }

  function getCarPrice() {
    return !!netInfo.isConnected ? car?.price : "...";
  }

  async function handleConfirmRental(): Promise<void> {
    setScheduling(true);

    await api
      .post("rentals", {
        user_id: 1,
        car_id: car.id,
        total: rentTotal,
        start_date: new Date(dates[0]),
        end_date: new Date(dates[dates.length - 1]),
      })
      .then(() => {
        onNavigateSuccessFeedback();
      })
      .catch(() => {
        setFailureMessage(
          "Não foi possível confirmar o agendamento. Por favor, tente novamente."
        );
        displayFailureFeedback(true);
      });
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

  const ContentBody = useCallback(() => {
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
      </Fragment>
    );
  }, [car, loaderFeedback]);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBackScheduling} />
      </Header>

      <CarImages>
        <Slider imagesUrl={getSliderImage()} />
      </CarImages>

      <Content>
        <ContentBody />

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
          onPress={handleConfirmRental}
          disabled={!netInfo.isConnected && scheduling}
        />
      </Footer>

      <ModalFeedback
        title="Ops!"
        buttonTitle="Continuar"
        message={failureMessage}
        buttonAction={onCloseFailureFeedback}
        isVisible={isFailureFeedbackVisible && !loaderFeedback}
      />
    </Container>
  );
}
