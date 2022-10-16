import {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { synchronize } from "@nozbe/watermelondb/sync";
import { useNavigation } from "@react-navigation/native";
import { ListRenderItem, StatusBar } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import React, { useCallback, useEffect, useState } from "react";
import { PanGestureHandler } from "react-native-gesture-handler";

import api from "../../services/api";
import { database } from "../../database";
import { Car as ModelCar } from "../../database/model/Car";

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
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const [isLoading, setLoading] = useState(true);
  const [carData, setCarData] = useState<ModelCar[]>([]);

  useEffect(() => {
    if (netInfo.isConnected) {
      offLineSynchronize();
    }
  }, [netInfo]);

  useEffect(() => {
    let isMounted = true;

    async function fetchCarsForScheduling(): Promise<void> {
      try {
        const carCollection = database.get<ModelCar>("cars");
        const cars = await carCollection.query().fetch();

        if (isMounted) {
          setCarData(cars);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchCarsForScheduling();

    return () => {
      isMounted = false;
    };
  }, []);

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

  async function offLineSynchronize(): Promise<void> {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const { data } = await api.get(
          `cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`
        );

        const { changes, latestVersion } = data;
        return { changes, timestamp: latestVersion };
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users;
        await api.post("/users/sync", user);
      },
    });
  }

  function handleCarDetails(car: ModelCar): void {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars(): void {
    navigation.navigate("MyCars");
  }

  const renderItem: ListRenderItem<ModelCar> = useCallback(
    (props) => {
      const { item } = props;
      return <CarCard data={item} onPress={() => handleCarDetails(item)} />;
    },
    [carData]
  );

  const FetchCars = (): JSX.Element => {
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

  const CountCars = (): JSX.Element | null => {
    if (isLoading) {
      return null;
    }

    return <TotalCars>Total de {carData?.length} carros</TotalCars>;
  };

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

      {/* Keep this button here for example and didactic questions */}
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
