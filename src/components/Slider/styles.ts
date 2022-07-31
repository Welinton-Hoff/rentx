import { Dimensions, FlatList } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const CarImageWrapper = styled.View`
  width: ${width}px;
  height: ${RFValue(132)}px;

  align-items: center;
  justify-content: center;
`;

export const ImageList = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
})`` as unknown as typeof FlatList;

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`;
