import React from "react";
import { Direction, Theme } from "react-native-calendars/src/types";
import {
  LocaleConfig,
  Calendar as CustomCalendar,
} from "react-native-calendars";

import { Arrow } from "./styles";
import { ViewStyle } from "react-native";
import { useTheme } from "styled-components";

LocaleConfig.locales["pt-br"] = {
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
};

LocaleConfig.defaultLocale = "pt-br";

export function Calendar() {
  const theme = useTheme();

  const headerStyle: ViewStyle = {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.text_detail,
    backgroundColor: theme.colors.background_secudanry,
  };

  const calendarTheme: Theme = {
    textMonthFontSize: 20,
    textDayHeaderFontSize: 10,
    monthTextColor: theme.colors.title,
    textDayFontFamily: theme.fonts.primary_400,
    textMonthFontFamily: theme.fonts.secudanry_600,
    textDayHeaderFontFamily: theme.fonts.primary_500,
    arrowStyle: {
      marginHorizontal: -15,
    },
  };

  const renderArrow = (direction: Direction) => {
    const chevronIcon = direction === "left" ? "chevron-left" : "chevron-right";

    return <Arrow name={chevronIcon} />;
  };

  return (
    <CustomCalendar
      firstDay={1}
      theme={calendarTheme}
      renderArrow={renderArrow}
      headerStyle={headerStyle}
      minDate={String(new Date())}
    />
  );
}
