import React from "react";

import CarSvg from "../../assets/car.svg";
import HomeSvg from "../../assets/home.svg";
import PeopleSvg from "../../assets/people.svg";

interface TabBarIconProps {
  color: string;
  tabName: string;
}

export function TabBarIcon({ tabName, color }: TabBarIconProps) {
  const svgTemplate = {
    ["Home"]: <HomeSvg width={24} height={24} fill={color} />,
    ["MyCars"]: <CarSvg width={24} height={24} fill={color} />,
    ["Profile"]: <PeopleSvg width={24} height={24} fill={color} />,
  };

  return svgTemplate[tabName];
}
