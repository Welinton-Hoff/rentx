import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Slider } from "../../components/Slider";
import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";

import speedSvg from "../../assets/speed.svg";
import forceSvg from "../../assets/force.svg";
import peopleSvg from "../../assets/people.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import accelerationSvg from "../../assets/acceleration.svg";

import {
  Rent,
  Price,
  Brand,
  About,
  Header,
  Footer,
  Period,
  Content,
  Details,
  CarName,
  CarImages,
  Container,
  Acessories,
  Description,
} from "./styles";

export function CarDetails() {
  const navigation = useNavigation();

  const handleConfirmRental = () => {
    navigation.navigate("Scheduling");
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <Slider
          imagesUrl={["https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png"]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <CarName>RS 5 Coupé</CarName>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120</Price>
          </Rent>
        </Details>

        <Acessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Acessories>

        <About>
          Este é automóvel desportivo. Surfiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
