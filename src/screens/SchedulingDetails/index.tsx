import React from "react";

import { Slider } from "../../components/Slider";
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
  Header,
  Footer,
  Period,
  Content,
  Details,
  CarName,
  DateInfo,
  DateTitle,
  DateValue,
  CarImages,
  Container,
  Acessories,
  Description,
  ChevronIcon,
  RentalPrice,
  CalendarIcon,
  RentalPeriod,
  RentNowButton,
  RentalPriceLabe,
  RentalPriceQuota,
  RentalPriceTotal,
  RentalPriceDetails,
  CalendarIconContainer,
} from "./styles";

export function SchedulingDetails() {
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

        <RentalPeriod>
          <CalendarIconContainer>
            <CalendarIcon />
          </CalendarIconContainer>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>

          <ChevronIcon />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabe>TOTAL</RentalPriceLabe>

          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 X3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <RentNowButton title="Alugar agora" onPress={() => {}} />
      </Footer>
    </Container>
  );
}
