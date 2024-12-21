"use client";

import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";


function ContextWrapper({ children }) {
    // context wrapper which wraps the whole web app also passing month Index
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
