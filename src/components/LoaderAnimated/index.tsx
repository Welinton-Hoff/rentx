import React from "react";

import { Container, CustomAnimatedLottieView } from "./styles";

import LoaderHome from "../../assets/lottieAnimation/homeLoader.json";

export function LoaderAnimated() {
  return (
    <Container>
      <CustomAnimatedLottieView source={LoaderHome} autoPlay loop />
    </Container>
  );
}
