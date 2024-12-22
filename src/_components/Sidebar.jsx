import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import CreateEventButton from "./CreateEventButton";

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
        <CreateEventButton/>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default SideBar;
