import React from "react";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

import { Title, Container } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
}

export function Button(props: ButtonProps) {
  const theme = useTheme();
  const { title, color = theme.colors.main, ...rest } = props;

  return (
    <Container {...rest} color={color} activeOpacity={0.7}>
      <Title>{title}</Title>
    </Container>
  );
}
