"use client";

import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
      break;

    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));

    case "delete":
      return state.filter((evt) => evt.id !== payload.id);

    default:
      throw new Error();
  }
}

function intiEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

function ContextWrapper({ children }) {
  // State to manage the current month index
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  // State to manage the month index for the small calendar
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  // State to manage the selected day
  const [daySelected, setDaySelected] = useState(dayjs());
  // State to manage the event model
  const [showEventModal, setShowEventModal] = useState(null);
  // State to manage the event model selected events editor
  const [selectedEvent, setSelectedEvent] = useState(null);
  // Reducer to manage the events
  const [savedEvents, dispatchCalEvents] = useReducer(
    savedEventsReducer,
    [],
    intiEvents
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

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
        showEventModal,
        setShowEventModal,
        dispatchCalEvents,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
