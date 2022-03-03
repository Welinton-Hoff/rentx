import React from "react";

import {
  CarImage,
  Container,
  ImageIndex,
  ImageIndexes,
  CarImageWrapper,
} from "./styles";

interface SliderProps {
  imagesUrl: string[];
}

export function Slider(props: SliderProps) {
  const { imagesUrl } = props;

  return (
    <Container>
      <ImageIndexes>
        <ImageIndex isActive={true} />
        <ImageIndex isActive={false} />
        <ImageIndex isActive={false} />
        <ImageIndex isActive={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
}
