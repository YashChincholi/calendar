import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import GlobalContext from "@/_context/GlobalContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import dayjs from "dayjs";

function CalenderHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  return (
    <div className="flex gap-5 my-10 mx-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          setMonthIndex(
            monthIndex === dayjs().month()
              ? monthIndex + Math.random()
              : dayjs().month()
          )
        }
      >
        Today
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setMonthIndex(monthIndex - 1)}
      >
        <FaChevronLeft size={24} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setMonthIndex(monthIndex + 1)}
      >
        <FaChevronRight size={24} />
      </Button>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </div>
  );
}

export default CalenderHeader;
