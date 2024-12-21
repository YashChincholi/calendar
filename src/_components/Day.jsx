import dayjs from "dayjs";
import React from "react";

function Day({ day, rowIndex }) {
  const getCurrentDate = () => {
    return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY");
  };

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
    </div>
  );
}

export default Day;
