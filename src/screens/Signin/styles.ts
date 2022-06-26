import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { Button } from "../../components/Button";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 115}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secudanry_600};
`;

export const SubTitle = styled.Text`
  margin-top: 16px;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const FormView = styled.View`
  width: 100%;
  margin: 64px 0;
`;

export const Footer = styled.View``;

export const LoginButton = styled(Button).attrs({
  title: "Login",
})`
  margin-bottom: 8px;
`;

export const CreateAccountButton = styled(Button).attrs(({ theme }) => ({
  title: "Criar conta gratuita",
  textColor: theme.colors.header,
  color: theme.colors.background_secudanry,
}))``;
