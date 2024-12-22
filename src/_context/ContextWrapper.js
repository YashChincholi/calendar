"use client";

import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function ContextWrapper({ children }) {
  // State to manage the current month index
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  // State to manage the month index for the small calendar
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  // State to manage the selected day
  const [daySelected, setDaySelected] = useState(null);

  // Effect to update the main month index when the small calendar month changes
  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  return (
    // Provide the context values to the children components
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
