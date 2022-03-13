import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

import { BackButton } from "../../components/BackButton";
import { ScrollView } from "react-native";

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
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

export const TitleHeader = styled.Text`
  font-size: ${RFValue(34)}px;
  margin-top: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secudanry_600};
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: ${RFValue(32)}px 0;
`;

export const DateInfo = styled.View`
  width: 85px;
`;

export const DateTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secudanry_500};
`;

export const DateValue = styled.Text<DateValueProps>`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};

  ${({ selected, theme }) =>
    !selected &&
    css`
      padding-bottom: 5px;
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
    `}
`;

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingBottom: RFValue(24),
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${({ theme }) => theme.colors.background_secudanry};
`;
