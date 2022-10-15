import Feather from "@expo/vector-icons/Feather";
import styled, { css } from "styled-components/native";
import { BackButton } from "../../components/BackButton";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface OptionProps {
  active: boolean;
}
interface PhotoProps {
  uri: string;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 227px;
  padding: 0 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const HeaderBackButton = styled(BackButton).attrs(({ theme }) => ({
  color: theme.colors.shape,
}))``;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secudanry_600};
  color: ${({ theme }) => theme.colors.background_secudanry};
`;

export const LogoutButton = styled.TouchableOpacity``;

export const LogoutIcon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  name: "power",
  color: theme.colors.shape,
}))``;

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  margin-top: 48px;
  border-radius: 90px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Photo = styled.Image.attrs(({ uri }: PhotoProps) => ({
  source: {
    uri: uri,
  },
}))<PhotoProps>`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const EditPhotoButton = styled.TouchableOpacity`
  z-index: 999;

  width: 40px;
  height: 40px;

  right: 2px;
  bottom: 10px;

  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const EditPhotoIcon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  name: "camera",
  color: theme.colors.shape,
}))``;

export const Content = styled.View`
  padding: 0 24px;
  margin-top: 132px;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;

  margin-bottom: 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const OptionButton = styled.TouchableOpacity<OptionProps>`
  padding-bottom: 5px;

  ${({ active }) =>
    active &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${({ theme }) => theme.colors.main};
    `}
`;

export const OptionTitle = styled.Text<OptionProps>`
  font-size: ${RFValue(20)}px;

  font-family: ${({ theme, active }) =>
    active ? theme.fonts.secudanry_600 : theme.fonts.secudanry_500};

  color: ${({ theme, active }) =>
    active ? theme.colors.header : theme.colors.text_detail};
`;
