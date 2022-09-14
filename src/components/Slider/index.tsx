import React, { useRef, useState } from "react";
import { ListRenderItem, ViewToken } from "react-native";

import { widthPercentageToDP } from "../../utils/Resolution";
import { PaginationIndicator } from "../PaginationIndicator";

import {
  CarImage,
  Container,
  ImageList,
  ImageIndexes,
  CarImageWrapper,
} from "./styles";

interface ImageSchema {
  id: string;
  photo: string;
}
interface SliderProps {
  imagesUrl: ImageSchema[];
}

interface ChangeImageProps {
  changed: ViewToken[];
  viewableItems: ViewToken[];
}

export function Slider(props: SliderProps) {
  const { imagesUrl } = props;

  const [imageIdex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  const renderItem: ListRenderItem<ImageSchema> = ({ item }) => {
    return (
      <CarImageWrapper>
        <CarImage source={{ uri: item.photo }} resizeMode="contain" />
      </CarImageWrapper>
    );
  };

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <PaginationIndicator
            key={String(index)}
            isActive={index === imageIdex}
          />
        ))}
      </ImageIndexes>

      <ImageList
        horizontal
        data={imagesUrl}
        decelerationRate={0}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        snapToInterval={widthPercentageToDP("100")}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}
