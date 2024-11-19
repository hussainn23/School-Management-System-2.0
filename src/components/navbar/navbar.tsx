import { Settings} from 'lucide-react';
import { Button } from '../ui/button';
import { SidebarTrigger } from '../ui/sidebar';
import { Notifications } from './notifications';
import { UserButton } from './user-button';

export const Navbar = () => {
  return (
    <header className="flex h-14 justify-between items-center border-b px-4 bg-white">
      <div className="flex justify-start items-center gap-2">
        <SidebarTrigger size={'lg'} />
        <span className="text-muted-foreground text-sm hidden md:flex">
          School Management System V 1.0
        </span>
      </div>
      <div className="flex justify-center items-center gap-4">
        <span className="text-muted-foreground text-sm hidden md:flex">
          Last login: 19:00:00 - 12/02/2024{' '}
        </span>
        <Notifications />
        <Button variant={'accent'} className="h-10 w-10">
          <Settings size={27} className="font-extrabold" />
        </Button>
        <UserButton />
      </div>
    </header>
  );
};
