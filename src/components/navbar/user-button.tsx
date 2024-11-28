import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Link,useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Inbox, Settings, HelpCircle } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useAuth } from '@/hooks/useAuth';

export const UserButton = () => {

    const user = useAuthStore(state => state.user)
    const {logout} = useAuth()

    const navigate = useNavigate()

    const handleLogout  = () => {
        logout();
        navigate('/login')
    }



  return (
    <div>
      <Popover>
        <PopoverTrigger className="flex items-center gap-2 p-2 rounded-lg ">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-64 shadow-lg dark:bg-gray-900">
          <div className="flex flex-col mb-3 justify-center items-center">
            <span className="text-sm font-medium">{user?.name}</span>
            <span className="text-xs text-muted-foreground uppercase">{user?.role}</span>
          </div>
          <div className="flex flex-col">
            <Link
              to="/profile"
              className="flex items-center gap-3 p-2 hover:bg-accent dark:hover:bg-gray-700 border-b"
            >
              <User className="w-4 h-4 text-theme" />
              <span className="text-sm">Profile</span>
            </Link>
            <Link
              to="/inbox"
              className="flex items-center gap-3 p-2 hover:bg-accent dark:hover:bg-gray-700 border-b"
            >
              <Inbox className="w-4 h-4 text-theme" />
              <span className="text-sm">Inbox</span>
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-3 p-2 hover:bg-accent dark:hover:bg-gray-700 border-b"
            >
              <Settings className="w-4 h-4 text-theme" />
              <span className="text-sm">Settings</span>
            </Link>
            <Link
              to="/support"
              className="flex items-center gap-3 p-2 hover:bg-accent dark:hover:bg-gray-700 border-b"
            >
              <HelpCircle className="w-4 h-4 text-theme" />
              <span className="text-sm">Support</span>
            </Link>
            <div className="pt-2">
              <Button variant="theme" className="w-full justify-center gap-3 " onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

