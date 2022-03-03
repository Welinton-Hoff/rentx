import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: ${RFValue(109)}px;
  height: ${RFValue(92)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: ${RFValue(16)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
