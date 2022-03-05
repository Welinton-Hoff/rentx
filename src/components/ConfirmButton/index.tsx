import React from "react";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

import { Button, Title } from "./styles";

interface ConfirmButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
}

export function ConfirmButton(props: ConfirmButtonProps) {
  const theme = useTheme();
  const { title, color = theme.colors.shape_dark, ...rest } = props;

  return (
    <Button color={color} {...rest} activeOpacity={0.7}>
      <Title>{title}</Title>
    </Button>
  );
}
