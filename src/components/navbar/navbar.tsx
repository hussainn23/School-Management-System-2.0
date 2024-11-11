import { Settings,Bell } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

export const Navbar = () => {
    return (
        <header className="flex h-14 justify-between items-center border-b px-4 bg-white">
            <div className="flex justify-start items-center gap-2">
                <SidebarTrigger size={'lg'} />
                <span className="text-muted-foreground text-sm">
                    School Management System V 1.0
                </span>
            </div>
            <div className="flex justify-center items-center gap-4">
                <span className="text-muted-foreground text-sm">
                    Last login: 19:00:00 - 12/02/2024{' '}
                </span>
                <Button variant={'accent'} className="h-10 w-10">
                    <Bell size={27} className="font-extrabold" />
                </Button>
                <Button variant={'accent'} className="h-10 w-10">
                    <Settings size={27} className="font-extrabold" />
                </Button>
            </div>
        </header>
    );
}