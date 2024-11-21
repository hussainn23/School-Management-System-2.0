import { Fullscreen, LanguagesIcon, MoonIcon, Search, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { Notifications } from "./notifications";
import { UserButton } from "./user-button";

export const Navbar = () => {
    return (
        <header className="flex h-16 justify-between items-center border-b px-4 bg-white">
            <div className="flex justify-start items-center gap-2">
                <SidebarTrigger size={'lg'} />
            </div>
            <div className="flex justify-center items-center gap-5">

                <span className="text-muted-foreground text-sm hidden md:flex">
                    <Search />
                </span>

                <span className="text-muted-foreground text-sm hidden md:flex">
                    <LanguagesIcon />
                </span>

                <span className="text-muted-foreground text-sm hidden md:flex">
                    <MoonIcon />
                </span>
                

                <Notifications />

                <span className="text-muted-foreground text-sm hidden md:flex">
                    <Fullscreen />
                </span>

                <UserButton />

                <Button variant={'ghost'} className="h-10 w-10">
                    <Settings size={27} className="font-extrabold" />
                </Button>
            </div>
        </header>
    );
}
