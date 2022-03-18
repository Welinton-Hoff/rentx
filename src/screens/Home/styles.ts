import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { FlatList, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

import Logo from "../../assets/logo.svg";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  justify-content: flex-end;
  padding: ${RFValue(32)}px ${RFValue(24)}px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RentxLogo = styled(Logo)`
  width: ${RFValue(108)}px;
  height: ${RFValue(12)}px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;

export const AnimatedView = styled(Animated.View)`
  position: absolute;

  right: 22px;
  bottom: 13px;
`;

export const MyCarsButton = styled(ButtonAnimated).attrs({
  activeOpacity: 0.7,
})`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;

  align-items: center;
  justify-content: center;

  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const CarIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: RFValue(32),
  name: "ios-car-sport",
  color: theme.colors.shape,
}))``;
