import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { Button } from "../../components/Button";

export const Container = styled.View`
  flex: 1;
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

export const CarImages = styled.View`
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

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: {
    padding: 24,
    alignItens: "center",
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

export const Accessories = styled.View`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(16)}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  margin-top: ${RFValue(40)}px;
  padding-bottom: ${RFValue(16)}px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const CalendarIconContainer = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const CalendarIcon = styled(Feather).attrs(({ theme }) => ({
  name: "calendar",
  size: RFValue(24),
  color: theme.colors.shape,
}))``;

export const ChevronIcon = styled(Feather).attrs(({ theme }) => ({
  name: "chevron-right",
  size: RFValue(10),
  color: theme.colors.text,
}))``;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const DateValue = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${({ theme }) => theme.colors.background_secudanry};
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: ${RFValue(16)}px;
`;

export const RentalPriceLabe = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RentalPriceQuota = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const RentalPriceTotal = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.success};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const RentNowButton = styled(Button).attrs(({ theme }) => ({
  color: theme.colors.success,
}))``;
