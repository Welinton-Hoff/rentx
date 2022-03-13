import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  color: string;
  opacity: number;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(19)}px;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const LoadIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.colors.shape,
}))``;
