import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
  width: 100%;
  height: ${RFValue(126)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(24)}px;
  margin-bottom: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.background_secudanry};
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const CarName = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${RFValue(16)}px;
`;

export const Rent = styled.View`
  margin-right: ${RFValue(24)}px;
`;

export const Period = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: ${RFValue(167)}px;
  height: ${RFValue(85)}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 12px;
  margin-top: -10px;

  background-color: ${({ theme }) => theme.colors.background_secudanry}; ;
`;

export const RentalPeriodTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const PeriodWrapper = styled.View`
  flex-direction: row;
`;

export const PeriodDate = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ChevronIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: RFValue(20),
  name: "arrowright",
  color: theme.colors.title,
}))`
  margin: 0 10px;
`;
