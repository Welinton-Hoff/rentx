import styled from "styled-components/native";

interface IndicatorProps {
  isActive: boolean;
}

export const Indicator = styled.View<IndicatorProps>`
  width: 6px;
  height: 6px;

  margin-left: 8px;
  border-radius: 3px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.title : theme.colors.shape};
`;
