import moment from "moment";
import "moment/locale/fr";

export const getFormatDate = (date) => {
  return moment(date).format("DD/MM/YY");
};

export const getCalendarDate = (date) => {
  return moment(date).calendar({
    sameDay: "LT",
    lastDay: "dddd LT",
    lastWeek: "dddd DD MMMM",
    sameElse: "dddd DD MMMM YYYY",
  });
};
