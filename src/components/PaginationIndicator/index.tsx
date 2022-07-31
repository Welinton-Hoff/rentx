import React from "react";
import { Indicator } from "./styles";

interface PaginationIndicatorProps {
  isActive?: boolean;
}

export function PaginationIndicator(props: PaginationIndicatorProps) {
  const { isActive = false } = props;
  return <Indicator isActive={isActive} />;
}
