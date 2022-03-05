import React from "react";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

import { Button, Title } from "./styles";

interface ConfirmButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export function ConfirmButton(props: ConfirmButtonProps) {
  const theme = useTheme();
  const { title, color = theme.colors.shape_dark, ...rest } = props;

  return (
    <Button color={color} {...rest}>
      <Title>{title}</Title>
    </Button>
  );
}
