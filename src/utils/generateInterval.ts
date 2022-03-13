import { eachDayOfInterval, format } from "date-fns";

import theme from "../styles/theme";
import { getPlatformDate } from "./getPlatformDate";
import { MarkedDateSchema, DayProps } from "../components/Calendar";

function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateSchema = {};

  const schedulingInterval = eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  });

  schedulingInterval.forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");
    const dateColor =
      start.dateString === date || end.dateString === date
        ? theme.colors.main
        : theme.colors.main_light;
    const dateTextColor =
      start.dateString === date || end.dateString === date
        ? theme.colors.main_light
        : theme.colors.main;

    interval = {
      ...interval,
      [date]: {
        color: dateColor,
        textColor: dateTextColor,
      },
    };
  });

  return interval;
}

export { generateInterval };
