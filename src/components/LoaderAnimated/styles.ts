import styled from "styled-components/native";
import AnimatedLottieView from "lottie-react-native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CustomAnimatedLottieView = styled(AnimatedLottieView).attrs({
  resizeMode: "contain",
})`
  height: 200px;
`;
