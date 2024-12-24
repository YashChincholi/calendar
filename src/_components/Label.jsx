import React, { useContext, useEffect } from "react";
import GlobalContext from "@/_context/GlobalContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-separator";
import dayjs from "dayjs";

export default function Labels() {
  const { labels, updateLabel, savedEvents } = useContext(GlobalContext);


  return (
    <React.Fragment>
      <ScrollArea className="h-72 w-full rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {savedEvents.map((event, idx) => (
            <React.Fragment key={idx}>
              <div key={idx} className="text-sm">
                <label
                  htmlFor="label"
                  key={idx}
                  className="mt-3 flex items-center"
                >
                  <Checkbox
                    id="label"
                    onClick={() => {
                      const label = labels.find(
                        (lbl) => lbl.label.category === event.label.category
                      );
                      updateLabel({
                        label: label.label,
                        checked: !label.checked,
                      });
                    }}
                    className={`form-checkbox h-5 w-5 text-${event.label.color}-400 rounded focus:ring-0 cursor-pointer`}
                  />
                  <Label className="text-sm font-semibold ml-2">
                    {event.title} at {event.time?.hours}:{event.time?.minutes}{" "}
                    on {dayjs(event.day).format("DD/MM/YY")}
                  </Label>
                </label>
              </div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </React.Fragment>
  );
}
