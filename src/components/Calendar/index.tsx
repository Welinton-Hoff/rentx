import React from "react";
import { ViewStyle } from "react-native";
import { useTheme } from "styled-components";
import { Direction, Theme } from "react-native-calendars/src/types";

import {
  LocaleConfig,
  CalendarProps,
  Calendar as CustomCalendar,
} from "react-native-calendars";

import { Arrow } from "./styles";
import { ptBR } from "../../config/localeConfig";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

interface MarkedDateSchema {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface DayProps {
  day: number;
  year: number;
  month: number;
  timestamp: number;
  dateString: string;
}

function Calendar(props: CalendarProps) {
  const theme = useTheme();
  const { markedDates, onDayPress } = props;

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
      markingType="period"
      theme={calendarTheme}
      onDayPress={onDayPress}
      renderArrow={renderArrow}
      headerStyle={headerStyle}
      markedDates={markedDates}
      minDate={String(new Date())}
    />
  );
}

export { Calendar, MarkedDateSchema, DayProps };
