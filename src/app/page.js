"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { getMonth } from "./utils";
import Month from "@/_components/Month";
import { useContext, useEffect, useState } from "react";
import CalendarHeader from "../_components/CalendarHeader";
import SideBar from "@/_components/Sidebar";
import GlobalContext from "@/_context/GlobalContext";
import EventModal from "@/_components/EventModal";
import dayjs from "dayjs";
import ExportButtons from "@/_components/Exports";
export default function Home() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, dispatchCalEvent, savedEvents } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) {
      // Reset the event's position if not dropped over a valid date
      console.log("Event not dropped over a valid date, resetting position.");
      return;
    }

    console.log("Dragged event ID:", active.id);
    console.log("Dropped over ID:", over.id);

    const eventId = active.id;
    const newDate = over.id;

    const updatedEvent = savedEvents.find((evt) => evt.id === eventId);
    if (updatedEvent) {
      const parsedDate = dayjs(newDate, "DD-MM-YYYY");
      if (parsedDate.isValid()) {
        const updatedEventWithNewDate = {
          ...updatedEvent,
          day: parsedDate.toISOString(),
        };
        console.log("Updated Event:", updatedEventWithNewDate);
        dispatchCalEvent({ type: "update", payload: updatedEventWithNewDate });
      } else {
        console.error("Invalid date:", newDate);
      }
    }
  }

  return (
    <div className="h-screen flex flex-1 z-0 bg-black">
      {showEventModal && <EventModal />}
      <SideBar className="w-64 bg-gray-200" />
      <div className="flex flex-col flex-1 mt-20">
        <ExportButtons />
        <CalendarHeader />
        <div className="flex flex-1 lg:px-20 pb-20 relative z-0">
          {" "}
          {/* Add relative positioning */}
          <DndContext onDragEnd={handleDragEnd}>
            <Month month={currentMonth} />
          </DndContext>
        </div>
      </div>
    </div>
  );
}
