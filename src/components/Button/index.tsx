import React from "react";
import { useTheme } from "styled-components";

import { Title, Container } from "./styles";

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button(props: ButtonProps) {
  const theme = useTheme();
  const { title, color = theme.colors.main, onPress, ...rest } = props;

  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}
