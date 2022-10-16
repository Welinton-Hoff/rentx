import React from "react";
import { SvgProps } from "react-native-svg";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Name } from "./styles";
import { useTheme } from "styled-components";

interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory(props: AccessoryProps) {
  const { name, icon: Icon } = props;

  const theme = useTheme();

  return (
    <Container>
      <Icon
        width={RFValue(32)}
        height={RFValue(32)}
        fill={theme.colors.header}
      />
      <Name>{name}</Name>
    </Container>
  );
}
