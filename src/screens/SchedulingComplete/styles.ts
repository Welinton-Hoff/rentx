import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import done from "../../assets/done.svg";
import logo from "../../assets/logo_background_gray.svg";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;

  padding-top: ${RFValue(90)}px;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const LogoSvg = styled(logo).attrs({
  width: width,
})``;

export const DoneSvg = styled(done).attrs({
  width: RFValue(80),
  height: RFValue(80),
})``;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secudanry_600};
`;

export const Message = styled.Text`
  text-align: center;
  margin-top: ${RFValue(16)}px;

  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const Footer = styled.View`
  width: 100%;

  align-items: center;

  margin: ${RFValue(80)}px 0;
`;
