import GlobalContext from "@/_context/GlobalContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import { FaCalendarAlt, FaCheck } from "react-icons/fa";
import TimePickerComponent from "./TimePicker";
import { Badge } from "@/components/ui/badge";

const labelsClasses = [
  { category: "office", color: "indigo" },
  { category: "home", color: "gray" },
  { category: "personal", color: "green" },
  { category: "work", color: "blue" },
  { category: "urgent", color: "red" },
  { category: "others", color: "purple" },
];

const colorClassMapping = {
  indigo: "bg-indigo-500",
  gray: "bg-gray-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  purple: "bg-purple-500",
};

function EventModal() {
  const { showEventModal, setShowEventModal, daySelected } =
    useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  return (
    <AlertDialog open={showEventModal}>
      <AlertDialogHeader visuallyHidden />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            placeholder="Add Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <Label htmlFor="description">Description</Label>
          <Input
            type="text"
            name="description"
            placeholder="Add Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
          <Label htmlFor="Time">Time</Label>

          <TimePickerComponent />
          <div className="flex items-center gap-11">
            <Label>Label</Label>
            <div className="flex space-x-2">
              {labelsClasses.map((label, idx) => (
                <HoverCard key={idx}>
                  <HoverCardTrigger asChild>
                    <span
                      className={`${
                        colorClassMapping[label.color]
                      } w-5 h-5 rounded-full flex items-center justify-center cursor-pointer`}
                      onClick={() => {
                        setSelectedLabel(label.color);
                      }}
                    >
                      {selectedLabel === label.color && (
                        <FaCheck size={12} color="white" />
                      )}
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <Badge className={`${colorClassMapping[label.color]}`}>
                      {label.category.charAt(0).toUpperCase() +
                        label.category.slice(1)}
                    </Badge>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogDescription>
            <div className="flex gap-2 items-center">
              <FaCalendarAlt size={20} />
              {daySelected.format("dddd, MMMM DD ")}
            </div>
          </AlertDialogDescription>
          <AlertDialogCancel
            onClick={() => {
              setShowEventModal(false);
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default EventModal;
