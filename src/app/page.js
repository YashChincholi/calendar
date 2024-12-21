"use client";

import { getMonth } from "./utils";
import Month from "@/_components/Month";
import { useContext, useEffect, useState } from "react";
import CalendarHeader from "../_components/CalendarHeader";
import SideBar from "@/_components/Sidebar";
import GlobalContext from "@/_context/GlobalContext";

export default function Home() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="h-screen flex flex-1">
      <SideBar className="w-64 bg-gray-200" />
      <div className="flex flex-col flex-1">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currentMonth} />
        </div>
      </div>
    </div>
  );
}
