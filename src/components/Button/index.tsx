import React from "react";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

import { Title, Container, LoadIndicator } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  textColor?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export function Button(props: ButtonProps) {
  const theme = useTheme();

  const {
    title,
    isLoading = false,
    isDisabled = false,
    color = theme.colors.main,
    textColor = theme.colors.shape,
    ...rest
  } = props;

  const hasDisabled: number = isDisabled ? 0.5 : 1;

  const IsLoading = () => {
    if (isLoading) {
      return <LoadIndicator />;
    }

    return <Title color={textColor}>{title}</Title>;
  };

  return (
    <Container
      {...rest}
      color={color}
      activeOpacity={0.7}
      opacity={hasDisabled}
      disabled={isDisabled}
    >
      <IsLoading />
    </Container>
  );
}
