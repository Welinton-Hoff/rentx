import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const InputView = styled.View`
  width: 100%;
  margin: 8px 0;
  flex-direction: row;
`;

export const IconView = styled.View`
  width: 55px;
  height: 56px;
  margin-right: 2px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_secudanry};
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.text_detail,
}))``;

export const Field = styled.TextInput.attrs({})`
  flex: 1;
  padding: 0 23px;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  background-color: ${({ theme }) => theme.colors.background_secudanry};
`;

export const PasswordVisibility = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
