import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CalenderHeader() {
  return (
    <div className="">
      <Button variant="outline" size="icon">
        Today
      </Button>
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>
      <Button variant="outline" size="icon">
        <ChevronLeft />
      </Button>
    </div>
  );
}

export default CalenderHeader;
