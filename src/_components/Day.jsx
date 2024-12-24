"use client";
import { useDraggable } from "@dnd-kit/core";
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
  const getCurrentDate = () =>
    day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY");
  const {
    setShowEventModal,
    setDaySelected,
    savedEvents,
    setSelectedEvent,
    filteredEvents,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YYYY") === day.format("DD-MM-YYYY")
    );
    console.log("Day:", day.format("DD-MM-YYYY"), "Filtered Events:", events); // Add logging
    setDayEvents(events);
  }, [savedEvents, day]);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YYYY") === day.format("DD-MM-YYYY")
    );
    console.log(
      "Filtered Events for Day:",
      day.format("DD-MM-YYYY"),
      "Filtered Events:",
      events
    ); // Add logging
    setDayEvents(events);
  }, [filteredEvents, day]);

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm p-1 grid font-bold">
            {day.format("ddd").toUpperCase()}
          </p>
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
          setShowEventModal(true);
          setDaySelected(day);
        }}
        className="cursor-pointer"
      >
        <ScrollArea className="h-8 w-full rounded-md">
          <div>
            {dayEvents.map((evt, idx) => (
              <DraggableEvent key={idx} evt={evt} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

function DraggableEvent({ evt }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: evt.id });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        zIndex: isDragging ? 1000 : "auto", // Ensure high z-index when dragging
        position: isDragging ? "fixed" : "relative", // Use fixed positioning when dragging
        pointerEvents: isDragging ? "none" : "auto", // Disable pointer events when dragging
      }
    : { zIndex: 1000, position: "relative" }; // Ensure z-index and position are always set
  const { setSelectedEvent } = useContext(GlobalContext);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="cursor-grab"
    >
      <Badge
        onClick={() => setSelectedEvent(evt)}
        variant="outline"
        className={`${
          labelColorMapping[evt.label.category]
        } p-1 justify-around flex-1 flex flex-wrap`}
      >
        {evt.title}
        <span>At</span>
        <div>
          {evt.time.hours}:{evt.time.minutes}
        </div>
      </Badge>
      <Separator className="my-2" />
    </div>
  );
}

export default Day;
