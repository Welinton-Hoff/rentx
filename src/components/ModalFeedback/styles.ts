import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Modal = styled.Modal`
  flex: 1;
`;

export const ModalBackground = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  background-color: "rgba(0, 0, 0, 0.4)";
`;

export const Content = styled.View`
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  padding: 40px 20px 20px 20px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  background-color: ${({ theme }) => theme.colors.background_secudanry};
`;

export const Title = styled.Text`
  padding-bottom: 40px;
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secudanry_600};
`;

export const Description = styled.Text`
  padding: 0 20px;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding-bottom: 10px;

  align-items: center;
  justify-content: center;
`;
