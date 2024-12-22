import React from "react";
import { Button } from "@/components/ui/button";

function CreateEventButton() {
  return (
    <Button
      variant="secondary"
      className="border py-6 bg-none rounded-full flex items-center shadow-md hover:shadow-2xl w-40"
    >
      <img src="./plus.svg" alt="create buttton" className="w-7 h-7" />
      <span className="pl-3 pr-7">Create</span>
    </Button>
  );
}

export default CreateEventButton;
