import styled from "styled-components/native";

import LogoSvg from "../../assets/logo.svg";
import BrandSvg from "../../assets/brand.svg";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const CustonLogo = styled(LogoSvg).attrs({
  width: 180,
  height: 20,
})``;

export const CustonBrandSvg = styled(BrandSvg).attrs({
  width: 80,
  height: 50,
})``;
