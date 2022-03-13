import { FlatList } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { BackButton } from "../../components/BackButton";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;

  justify-content: center;
  padding: ${RFValue(25)}px;
  padding-top: ${RFValue(getStatusBarHeight() + 30)}px;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderButton = styled(BackButton).attrs(({ theme }) => ({
  color: theme.colors.shape,
}))``;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  margin-top: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secudanry_600};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-top: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secudanry_400};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;

  padding: 0 16px;
`;

export const Appointments = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const AppointmentsQuantity = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const CarList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;
