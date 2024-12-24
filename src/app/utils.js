import dayjs from "dayjs";
import { Parser } from "json2csv";

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

export function exportEventsAsJSON(events, month) {
  const dataStr = JSON.stringify(events, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `events-${month}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function exportEventsAsCSV(events, month) {
  try {
    const parser = new Parser();
    const csv = parser.parse(events);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `events-${month}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error exporting CSV:", error);
  }
}
