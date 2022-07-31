import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 31}px;
`;

export const StepIndicator = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-top: 60px;
  margin-bottom: 16px;
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secudanry_600};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const FormView = styled.View`
  margin-top: 64px;
  margin-bottom: 16px;
`;

export const FormTitle = styled.Text`
  margin-bottom: 24px;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secudanry_600};
`;
