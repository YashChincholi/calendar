import GlobalContext from "@/_context/GlobalContext";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";

const labelColorMapping = {
  office: "bg-indigo-200",
  home: "bg-gray-200",
  personal: "bg-green-200",
  work: "bg-blue-200",
  urgent: "bg-red-200",
  others: "bg-purple-200",
};

function Day({ day, rowIndex }) {
  const [dayEvents, setDayEvents] = useState([]);
  const getCurrentDate = () => {
    return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY");
  };
  const {
    setShowEventModal,
    setDaySelected,
    savedEvents,
    setSelectedEvent,
    filteredEvents,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm p-1 grid">{day.format("ddd").toUpperCase()}</p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center ${
            getCurrentDate() ? "bg-blue-700 rounded-full text-white p-3" : ""
          }`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        onClick={() => {
          setShowEventModal(true), setDaySelected(day);
        }}
        className="cursor-pointer h-full w-full"
      >
        {dayEvents.map((evt, idx) => (
          <div className="w-full" key={idx}>
            <Badge
              onClick={() => {
                setSelectedEvent(evt);
              }}
              variant="outline"
              className={`${
                labelColorMapping[evt.label.category]
              }  p-1 justify-around flex-1 flex flex-wrap`}
              key={idx}
            >
              {evt.title}
              <span>At</span>
              <div>
                {evt.time.hours}:{evt.time.minutes}
              </div>
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;
