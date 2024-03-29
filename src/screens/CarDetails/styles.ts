import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { ActivityIndicator } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secudanry};
`;

export const LoadIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.colors.main,
  size: "large",
}))`
  margin-top: 50%;
`;

export const HeaderAnimated = styled(Animated.View).attrs({})`
  z-index: 1;
  overflow: hidden;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background_secudanry};
`;

export const Header = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-left: ${RFValue(24)}px;
  margin-top: ${getStatusBarHeight() + 18}px;
`;

export const CarAnimatedImages = styled(Animated.View)`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Rent = styled.View``;

export const Price = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const Brand = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const Period = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const ScrollAnimated = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    alignItens: "center",
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight() + 160,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(38)}px;
`;

export const CarName = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const Description = styled.View``;

export const About = styled.Text`
  text-align: justify;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};

  margin-top: ${RFValue(23)}px;
`;

export const Accessories = styled.View`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(16)}px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${({ theme }) => theme.colors.background_secudanry};
`;
