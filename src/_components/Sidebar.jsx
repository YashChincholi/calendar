import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Label";

function SideBar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-start bg-[#E7EDE7]">
          <img src="./logo.svg" alt="logo" className="mr-2 w-30 h-20" />
          <h1 className="text-xl font-medium">Calendar</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <CreateEventButton />
        <SmallCalendar />
        <Labels />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default SideBar;
