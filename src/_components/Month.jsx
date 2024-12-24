import { useDroppable } from "@dnd-kit/core";
import React from "react";
import Day from "./Day";

function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 bg-white w-full h-full">
      {month.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((day, dayIndex) => (
            <DroppableDay
              key={`${rowIndex}-${dayIndex}`}
              day={day}
              rowIndex={rowIndex}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
function DroppableDay({ day, rowIndex }) {
  const { setNodeRef } = useDroppable({ id: day.format("DD-MM-YYYY") });

  return (
    <div ref={setNodeRef} className="flex flex-col relative">
      {/* Add relative positioning */}
      <Day day={day} rowIndex={rowIndex} />
    </div>
  );
}

export default Month;
