import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface ContainerProps extends RectButtonProps {
  color: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(19)}px;
  background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
