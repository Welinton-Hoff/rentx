import React from "react";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";

interface BackButtonProps extends TouchableOpacityProps {
  color?: string;
}

export function BackButton(props: BackButtonProps) {
  const theme = useTheme();
  const { color = theme.colors.text, ...rest } = props;

  return (
    <Container {...rest} activeOpacity={0.7}>
      <MaterialIcons name="chevron-left" size={24} color={color} />
    </Container>
  );
}
