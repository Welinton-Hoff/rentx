import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

export const LoadIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.colors.main,
  size: "large",
}))`
  flex: 1;
`;
