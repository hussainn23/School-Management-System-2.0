import { Fullscreen, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { SidebarTrigger } from '../ui/sidebar';
import { Notifications } from './notifications';
import { UserButton } from './user-button';
import { ModeToggle } from './ThemeSwitcher';
import { LanguageDropdown } from './language';
import { SearchDropdown } from './search';

export const Navbar = () => {
  return (
    <header className="flex h-[79px] justify-between items-center border-b px-4 bg-white dark:bg-gray-900 dark:border-gray-800">
      {/* Left Section */}
      <div className="flex justify-start items-center gap-2">
        <SidebarTrigger size="lg" />
      </div>
      {/* Center Section */}
      <div className="flex justify-center items-center gap-5">
        {/* Search dropdown */}
        <SearchDropdown />
        {/* Languages dropdown */}
        <LanguageDropdown />
        {/* Theme Toggle */}
        <ModeToggle />
        {/* Notifications */}
        <Notifications />
        {/* Fullscreen Icon */}
        <span className="text-muted-foreground text-sm hidden md:flex dark:text-gray-400">
          <Fullscreen />
        </span>
        {/* User Button */}
        <UserButton />
        {/* Settings Button */}
        <Button variant="ghost" className="h-10 w-10 dark:hover:bg-gray-700">
          <Settings size={27} className="font-extrabold dark:text-gray-300" />
        </Button>
      </div>
    </header>
  );
};
