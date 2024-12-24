import React, { useContext } from "react";
import GlobalContext from "@/_context/GlobalContext";
import { exportEventsAsJSON, exportEventsAsCSV } from "@/app/utils";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";

export default function ExportButtons() {
  const { savedEvents, monthIndex } = useContext(GlobalContext);

  const month = dayjs().month(monthIndex).format("MMMM-YYYY");
  const eventsForMonth = savedEvents.filter(
    (evt) => dayjs(evt.day).month() === monthIndex
  );


  return (
    <div className="export-buttons flex items-center justify-around gap-2">
      <Button onClick={() => exportEventsAsJSON(eventsForMonth, month)}>
        Export as JSON
      </Button>
      <Button onClick={() => exportEventsAsCSV(eventsForMonth, month)}>
        Export as CSV
      </Button>
    </div>
  );
}
