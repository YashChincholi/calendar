import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  // getting year and first Day of month
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();

  // -ve counter so that the previous months remaining days should also be there
  let currentMonthCount = 0 - firstDayOfMonth;

  // storing in 2 dimesional matrix with each row by row with Date object of js
  const dayMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return dayMatrix;
}
