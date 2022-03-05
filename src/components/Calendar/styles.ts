import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Arrow = styled(Feather).attrs(({ theme }) => ({
  size: RFValue(24),
  color: theme.colors.text,
}))``;
