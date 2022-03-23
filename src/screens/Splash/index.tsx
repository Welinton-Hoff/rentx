import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  runOnJS,
  withTiming,
  Extrapolate,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Container, CustonLogo, CustonBrandSvg } from "./styles";

export function Splash() {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const initApp = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 2500 }, () => {
      "worklet";
      runOnJS(initApp)();
    });
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <CustonBrandSvg />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <CustonLogo />
      </Animated.View>
    </Container>
  );
}
