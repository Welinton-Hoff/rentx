import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
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
