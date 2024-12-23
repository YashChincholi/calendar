import React from "react";
import Day from "./Day";

function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 bg-white">
      {month.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((day, dayIndex) => (
            <Day
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

export default Month;
