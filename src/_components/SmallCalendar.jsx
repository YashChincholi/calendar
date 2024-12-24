"use client";

// Import necessary modules and components
import GlobalContext from "@/_context/GlobalContext";
import { getMonth } from "@/app/utils";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SmallCalendar() {
  // State to manage the current month and its index
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());

  // Destructure context values
  const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } =
    useContext(GlobalContext);

  // Update current month index when monthIndex changes
  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  // Update current month when currentMonthIndex changes
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  // Function to determine the CSS class for a day
  function getClassDay(day) {
    const format = "DD-MM-YYYY";
    const nowDay = dayjs().format(format); // Current day
    const currDay = day.format(format); // Day in the calendar
    const sltDay = daySelected && daySelected.format(format); // Selected day

    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white"; // Style for current day
    } else if (sltDay === currDay) {
      return "bg-red-500 rounded-full text-white hover:bg-red-500"; // Style for selected day
    } else {
      return ""; // Default style
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between items-center">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentMonthIndex(currentMonthIndex - 1)}
          >
            <FaChevronLeft size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentMonthIndex(currentMonthIndex + 1)}
          >
            <FaChevronRight size={18} />
          </Button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, index) => (
          <Button
            variant="secondary"
            className="text-sm py-1 text-center"
            key={index}
          >
            {day.format("dd").charAt(0)}
          </Button>
        ))}
        {currentMonth.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, idx) => (
              <Button
                variant="outline"
                key={idx}
                className={`${getClassDay(day)}`}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIndex);
                  setDaySelected(day);
                }}
              >
                {dayjs(day).format("D")}
              </Button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SmallCalendar;
