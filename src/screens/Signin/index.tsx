import React from "react";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";

import { Header, Container, Title, SubTitle } from "./styles";

export function Signin() {
  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Header>
        <Title>Estamos{"\n"}quase lá.</Title>

        <SubTitle>
          Faça o seu login para começar{"\n"}
          uma experiência incrível.
        </SubTitle>

        <Button
          title="Login"
          isLoading={false}
          isDisabled={false}
          onPress={() => {}}
        />
      </Header>
    </Container>
  );
}
